import React from 'react'

const GenderButton = ({sex, handleChangeSex}:{sex:string, handleChangeSex:(a:string)=>void}) => {
  return (
    <tr className="relative top-[125px]">
        <td>Sex</td>
        <td className="relative md:-left-4 flex gap-3">
          {sex === "male" ? (
            <button className="genderBtn bg-blue text-white" type="button">
              Male
            </button>
          ) : (
            <button
              className="genderBtn "
              type="button"
              onClick={() => handleChangeSex("male")}
            >
              Male
            </button>
          )}
          {sex === "female" ? (
            <button className="genderBtn bg-blue text-white" type="button">
              Female
            </button>
          ) : (
            <button
              className="genderBtn "
              type="button"
              onClick={() => handleChangeSex("female")}
            >
              Female
            </button>
          )}
        </td>
      </tr>
  )
}

export default GenderButton