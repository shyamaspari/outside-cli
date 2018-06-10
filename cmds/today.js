const ora = require('ora')
const getWeather = require('../utils/weather')
const getLocation = require('../utils/location')

module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const location = args.location || args.l || await getLocation()
    const weather = await getWeather(location)

    spinner.stop()

    console.log(`\t${weather.title}\n-------------------------------------------------------------------- `)
    console.log(`\t${weather.condition.temp}° ${weather.condition.text} at ${weather.condition.date} `)
  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}
