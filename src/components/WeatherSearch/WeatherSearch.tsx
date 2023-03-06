import { Place } from '@/types'
import Button from '../Button/Button'
import TextField from '../TextField/TextField'

type WeatherSearchProps = {
  term: string
  options: Place[]
  handleOnInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleOnSubmit: () => void
  handleOnSelectOption: (value: Place) => void
  inputRef: React.RefObject<HTMLInputElement>
}

const WeatherSearch = ({
  term,
  options,
  handleOnInputChange,
  handleOnSubmit,
  handleOnSelectOption,
  inputRef,
}: WeatherSearchProps) => {
  return (
    <section className="relative mt-8">
      <div className="flex">
        <TextField
          type="text"
          variant="custom"
          value={term}
          size="medium"
          ref={inputRef}
          onChange={handleOnInputChange}
          borderInset="left"
        />

        <Button
          variant="custom"
          type="submit"
          color="primary"
          borderInset="right"
          onClick={handleOnSubmit}
        >
          Search
        </Button>
      </div>

      {options.length > 0 && (
        <ul className="absolute top-12 z-50 w-full rounded bg-white bg-opacity-50">
          {options.map((opt, index) => (
            <li
              tabIndex={1}
              className="cursor-pointer rounded py-2 px-2 text-sm text-gray-700 hover:bg-white hover:text-purple-500"
              key={`${opt.lon} ${opt.lat}, ${index}`}
              value={`${opt.lat} ${opt.lon}`}
              onClick={() => handleOnSelectOption(opt)}
            >
              {opt.name} {opt.state ? `(${opt.state})` : ''} - {opt.country}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default WeatherSearch
