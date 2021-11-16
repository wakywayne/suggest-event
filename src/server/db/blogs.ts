import { Query } from "./index";
import { Users } from "./models";

const allsuggestedevents = async () => Query("select * from SuggestedEvents;");

const allsuggestedeventsusers = async () => {
  Query("SELECT * from allsuggestedeventsusers");
};

const addEvent = async (
  eventname: string,
  eventdescription: string,
  eventdate: string,
  userId: number
) => {
  Query(
    `INSERT INTO SuggestedEvents(eventname, eventdescription, eventdate, userId) 
  values(?, ?, ?, ?);`,
    [eventname, eventdescription, eventdate, userId]
  );
};

const find = (column: string, value: string | number) => {
  return Query("SELECT * from suggestedeventsusers WHERE ?? = ?", [
    column,
    value,
  ]);
};

export default {
  allsuggestedevents,
  allsuggestedeventsusers,
  addEvent,
  find,
};

// blogs.ts?:45:27)
// blogs.ts?:33:23)
// /./src/server/db/blogs.ts?:14:53)
// blogs.ts?:8:71)
