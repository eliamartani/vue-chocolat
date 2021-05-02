const { execSync } = require('child_process')
const { writeFileSync } = require('fs')
const { resolve } = require('path')
const { createInterface } = require('readline')
const package = require('../package.json')

function exec(command) {
  execSync(command, { stdio: 'inherit' })
}

function nodeInstallAndPublish(pkg) {
  saveFile(pkg)
  exec('npm install')
  exec('npm publish')
}

function publishToGit(pkg, name, publishConfig) {
  pkg.name = name
  pkg.publishConfig = publishConfig

  nodeInstallAndPublish(pkg)
}

function publishToNpm(pkg) {
  delete pkg.publishConfig

  pkg.name = pkg.name.replace(/(\@(.*?)\/)/i, '')

  nodeInstallAndPublish(pkg)
}

function saveFile(pkg) {
  const file = resolve('package.json')

  writeFileSync(file, JSON.stringify(pkg, null, '  '))
}

function updateVersion(pkg) {
  let proceed = false
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question(
    `Which version to set?\nPrevious version: ${pkg.version}\n> `,
    version => {
      if (version) {
        pkg.version = version

        saveFile(pkg)

        exec('npm install')
        exec('git add package.json')
        exec('git add package-lock.json')
        exec(`git commit -m "chore: Bump application version to ${version}"`)
        exec(`git tag v${version}"`)
        exec('git push --tags')

        proceed = true
      }

      readline.close()
    }
  )

  readline.on('close', () => {
    if (!proceed) {
      return
    }

    // make previous copy nothing is lost
    const { name, publishConfig } = pkg

    publishToNpm(pkg)
    publishToGit(pkg, name, publishConfig)
  })
}

updateVersion(package)

// cleanup
exec('git checkout .')
