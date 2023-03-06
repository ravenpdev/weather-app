import { useEffect, useRef, useState } from 'react'
import { WeatherSearch } from '@/components'
import { Place } from '@/types'

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY

const WeatherSearchContainer = () => {
  // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
  // http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
  const inputRef = useRef<HTMLInputElement>(null)

  const [term, setTerm] = useState<string>('')
  const [options, setOptions] = useState<Place[]>([])
  const [selectedOption, setSelectedOption] = useState<Place | null>(null)

  useEffect(() => {
    inputFocus()
  }, [])

  const inputFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const getSearchOptions = (value: string) => {
    if (value.trim() === '') {
      setOptions([])
      return
    }

    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data))
  }

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setTerm(value)

    getSearchOptions(value)
  }

  const getForecast = (value: Place) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${value.lat}&units=metric&lon=${value.lon}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  const handleOnSubmit = () => {
    if (!selectedOption) return

    getForecast(selectedOption)

    inputFocus()
  }

  const handleOnSelectOption = (value: Place) => {
    setSelectedOption(value)
    setTerm(value.name)
    setOptions([])
  }

  return (
    <div className="-mt-20 w-full max-w-lg bg-white bg-opacity-20 py-24 px-16">
      <h1 className="mb-2 text-center text-5xl font-bold text-white">
        <span className="font-thin">Weather</span> Forecast
      </h1>
      <p className="text-center font-light text-gray-200">
        Enter a place you want to know the weather of and select an option from
        dropdown
      </p>

      <WeatherSearch
        term={term}
        options={options}
        handleOnInputChange={handleOnInputChange}
        handleOnSubmit={handleOnSubmit}
        handleOnSelectOption={handleOnSelectOption}
        inputRef={inputRef}
      />
    </div>
  )
}

export default WeatherSearchContainer
