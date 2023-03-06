import { Forecast, Place } from '@/types'
import { useEffect, useRef, useState } from 'react'

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY

const useForedcast = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [term, setTerm] = useState<string>('')
  const [options, setOptions] = useState<Place[]>([])
  const [selectedOption, setSelectedOption] = useState<Place | null>(null)
  const [forecast, setForecast] = useState<Forecast | null>(null)

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
      .then((data) => setForecast(data))
  }

  const handleOnSubmit = () => {
    if (!selectedOption) return

    getForecast(selectedOption)
  }

  const handleOnSelectOption = (value: Place) => {
    setSelectedOption(value)
    setTerm(value.name)
    setOptions([])
  }

  return {
    inputRef,
    term,
    options,
    forecast,
    handleOnInputChange,
    handleOnSelectOption,
    handleOnSubmit,
  }
}

export default useForedcast
