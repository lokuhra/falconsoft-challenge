import React from "react"

interface TitleH1Props {
  text: string | number
}

export const TitleH1 = ({ text }: TitleH1Props) => {
  return <h1 className="text-3xl font-bold mb-2 mt-2 text-center">{text}</h1>
}
