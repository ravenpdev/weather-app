import { WeatherSearch } from '@/components'
import useForecast from '@/hooks/useForecast'

const WeatherSearchContainer = () => {
  const {
    inputRef,
    term,
    options,
    forecast,
    handleOnInputChange,
    handleOnSelectOption,
    handleOnSubmit,
  } = useForecast()

  return (
    <div className="-mt-20 w-full max-w-lg bg-white bg-opacity-20 py-24 px-16">
      <h1 className="mb-2 text-center text-5xl font-bold text-white">
        <span className="font-thin">Weather</span> Forecast
      </h1>
      <p className="text-center font-light text-gray-200">
        Enter a place you want to know the weather of and select an option from
        dropdown
      </p>

      {forecast ? (
        <section className="mt-5">
          <h2>Forecast Result</h2>
          {JSON.stringify(forecast)}
        </section>
      ) : (
        <WeatherSearch
          term={term}
          options={options}
          handleOnInputChange={handleOnInputChange}
          handleOnSubmit={handleOnSubmit}
          handleOnSelectOption={handleOnSelectOption}
          inputRef={inputRef}
        />
      )}
    </div>
  )
}

export default WeatherSearchContainer
