import React from "react"

interface TitleH2Props {
  text: string | number
}

export const TitleH2 = ({ text }: TitleH2Props) => {
  return <h2 className="text-2xl font-bold mt-8 text-center">{text}</h2>
}
