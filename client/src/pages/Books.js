import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import Search from "../components/Search"

function Books() {
    return (
        <div className="w-50 center bb bt mt5">
            <Header />
            <Search />
            <Results />
        </div>
    )
}

export default Books