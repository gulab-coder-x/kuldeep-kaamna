export interface CalendarEvent {
  title: string;
  location: string;
  start: string;
  end: string;
  description?: string;
}

export const downloadCalendarEvent = (event: CalendarEvent) => {
  const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Kuldeep & Kaamna Wedding//EN
BEGIN:VEVENT
UID:${Date.now()}@wedding.invitation
SEQUENCE:0
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"}
DTSTART:${event.start}
DTEND:${event.end}
SUMMARY:${event.title}
LOCATION:${event.location}
DESCRIPTION:${event.description || "Wedding celebration of Kuldeep & Kaamna"}
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.setAttribute("download", `${event.title.replace(/\s+/g, "_")}.ics`);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const downloadAllEventsCalendar = (events: CalendarEvent[]) => {
  const vevents = events
    .map(
      (event, idx) => `BEGIN:VEVENT
UID:${Date.now()}_${idx}@wedding.invitation
SEQUENCE:0
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"}
DTSTART:${event.start}
DTEND:${event.end}
SUMMARY:${event.title}
LOCATION:${event.location}
DESCRIPTION:${event.description || "Wedding celebration of Kuldeep & Kaamna"}
END:VEVENT`
    )
    .join("\n");

  const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Kuldeep & Kaamna Wedding//EN
${vevents}
END:VCALENDAR`;

  const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.setAttribute("download", "Kuldeep_Kaamna_Wedding_Celebrations.ics");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
