const { execSync } = require('child_process')
const { writeFileSync } = require('fs')
const { resolve } = require('path')
const { createInterface } = require('readline')
const package = require('../package.json')

class PublishScript {
  constructor(packageJson) {
    this.package = packageJson

    // make previous copy nothing is lost
    this.name = packageJson.name
    this.publishConfig = packageJson.publishConfig

    this.handleClose = this.handleClose.bind(this)
    this.handleQuestion = this.handleQuestion.bind(this)
  }

  get packageJsonGit() {
    return {
      ...this.package,
      name: this.name,
      publishConfig: this.publishConfig
    }
  }

  get packageJsonNpm() {
    return {
      ...this.package,
      name: this.package.name.replace(/(\@(.*?)\/)/i, ''),
      publishConfig: {}
    }
  }

  /**
   * Executes bash script synchronously
   * @param {string|string[]} command (list of) command script
   */
  exec(command) {
    const commands = Array.isArray(command) ? command : [command]
    const options = { stdio: 'inherit' }

    commands.forEach(script => execSync(script, options))
  }

  handleClose() {
    if (!this.version) {
      console.log('No version set. Finishing script.')
      return
    }

    this.publishToNpm()
    this.publishToGit()

    // cleanup
    this.exec('git checkout .')
  }

  handleQuestion(version) {
    this.version = version

    if (!this.version) {
      this.readline.close()

      return
    }

    this.updatePackageVersion()

    this.readline.close()
  }

  installAndPublish() {
    this.exec(['npm install', 'npm publish'])
  }

  publishToGit() {
    this.savePackageJson(this.packageJsonGit)
    this.installAndPublish()
  }

  publishToNpm() {
    this.savePackageJson(this.packageJsonNpm)
    this.installAndPublish()
  }

  /**
   * Saves json file locally
   * @param {string} packageJson package.json content
   */
  savePackageJson(packageJson) {
    const content = JSON.stringify(packageJson, null, '  ')
    const file = resolve('package.json')

    writeFileSync(file, content)
  }

  start() {
    const options = {
      input: process.stdin,
      output: process.stdout
    }
    const questionMessage = `Which version to set?\nPrevious version: ${this.package.version}\n> `

    this.readline = createInterface(options)
    this.readline.question(questionMessage, this.handleQuestion)
    this.readline.on('close', this.handleClose)
  }

  updatePackageOnGit() {
    const scripts = [
      'npm install',
      'git add package.json',
      'git add package-lock.json',
      `git commit -m "chore: Bump application version to ${this.version}"`,
      `git tag v${this.version}"`,
      'git push --tags'
    ]

    this.exec(scripts)
  }

  updatePackageVersion() {
    this.package.version = this.version

    this.savePackageJson(this.package)
    this.updatePackageOnGit()
  }
}

const publishScript = new PublishScript(package)

publishScript.start()
