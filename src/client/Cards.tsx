import React from 'react'

export default function Cards({ useless }: any) {

    const [Coding, setCoding]: any = React.useState([]);

    const TOKEN = localStorage.getItem('token');


    const getEvents = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        }
    };

    React.useEffect(() => {
        fetch('/api/suggestedevents', getEvents)
            .then(res => res.json())
            .then(coding => setCoding(coding))
            .catch(err => {
                console.log(err);
            });
    }, [useless]);


    return (
        <>
            <div className="d-flex justify-content-center flex-wrap">
                {
                    Coding.map((event: any) => {
                        return (
                            <div key={event.id} className="width card mx-5 mb-1 pb-0">
                                <h3 title="Title" className="card-header">{event.eventname}</h3>
                                <h6 title="Event Description" className="card-body">{event.eventdescription}</h6>
                                <h5 title="Event Date" style={{ backgroundColor: 'blue', color: 'white' }} className="card-footer"><em>{event.eventdate}</em></h5>
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}
