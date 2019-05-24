import React from "react"
import { MdSearch } from "react-icons/md"
export default () => {
  return (
    <form onSubmit={e => e.preventDefault()} className="search-box">
      <input name="search" type="text" placeholder="جستجو..." />
      <button type="submit">
        <MdSearch />
      </button>
    </form>
  )
}
