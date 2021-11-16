import React, { useState, useEffect } from 'react';
import Form from './Form';
import Cards from './Cards';
import { Center } from './styles';



export default function App2() {

  const [EventNames, setEventName]: any = useState('');
  const [EventDescriptions, setEventDescription]: any = useState('');
  const [EventDates, setEventDate]: any = useState('');
  const [uselessState, setuselessState]: any = useState(0);

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      eventname: EventNames,
      eventdescription: EventDescriptions,
      eventdate: EventDates,
      userId: 1
    }),
  };

  const eventSubmit = (e: any) => {
    e.preventDefault();


    fetch(`/api/suggestedevents/`, requestOptions).then((res) => {
      if (res.ok) {

      } else {
        alert("it didn't work! Coach Wayne Apologizes try again later");
      }
    });
    setuselessState(uselessState + 1);
  }



  return (
    <>
      <h1 className="mt-1 mb-2 text-center">Welcome to the suggest an event page</h1>
      <div className="row">
        <Center>
          <Form submit={eventSubmit} setStates={{
            name: setEventName,
            description: setEventDescription,
            date: setEventDate,
          }}></Form>
        </Center>
      </div>
      <hr />
      {
        //I think that a useEffect here with the states will work
        // could just not set state cuz those are the only states
        <Cards useless={uselessState} />
      }
    </>
  );
}
