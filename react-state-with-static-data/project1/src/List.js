import React, { useState } from "react";

const List = ({ peoplelist }) => {
  const [data, setData] = useState(peoplelist);

  /* Delete handler to filter the selected List */

  const deletePeople = (id) => {
    console.log(id);
    console.log(data);
    let newList = data.filter((people) => {
      return people.id !== id;
    });
    console.log(newList);
    setData(newList);
  };
  return (
    <>
      <h3>{data.length} birthdays today</h3>

      {data.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <button
              className="delete-icon"
              onClick={() => {
                deletePeople(id);
              }}
              id={id}
            >
              <i className="fa fa-trash"></i>
            </button>
          </article>
        );
      })}
      <button onClick={() => setData([])}>clear all</button>
    </>
  );
};
export default List;
