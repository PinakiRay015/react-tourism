import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <div className="w-full h-fit py-4">
      <div className="max-w-4xl">
      <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{backgroundColor:"#f77f00" ,  color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #f77f00, 243)" }}
        date="Day 1"
        iconStyle={{ color: "#fff" }}
        icon={<span>{}</span>} // Replace with an actual icon if needed
      >
        <h3 className="vertical-timeline-element-title">Airport Pick Up</h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Day 2"
        iconStyle={{ background: "#f77f00", color: "#fff" }}
        icon={<span></span>} // Replace with an actual icon if needed
      >
        <h3 className="vertical-timeline-element-title">
          Temples & River Cruise
        </h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Day 3"
        iconStyle={{ background: "#f77f00", color: "#fff" }}
        icon={<span></span>} // Replace with an actual icon if needed
      >
        <h3 className="vertical-timeline-element-title">
          Massage & Overnight Train
        </h3>
        <p>
          Like on all of our trips, we can collect you from the airport when you
          land and take you directly to your hotel. The first Day is just a
          check-in Day so you have this freedom to explore the city and get
          settled in.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Day 4"
        iconStyle={{ background: "#f77f00", color: "#fff" }}
        icon={<span></span>} // Replace with an actual icon if needed
      >
        <h3 className="vertical-timeline-element-title">
        Day 4: Khao Sok National Park
        </h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Day 5"
        iconStyle={{ background: "#f77f00", color: "#fff" }}
        icon={<span></span>} // Replace with an actual icon if needed
      >
        <h3 className="vertical-timeline-element-title">
        Travel to Koh Phangan
        </h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Day 6"
        iconStyle={{ background: "#f77f00", color: "#fff" }}
        icon={<span></span>} // Replace with an actual icon if needed
      >
        <h3 className="vertical-timeline-element-title">
        Morning Chill & Muay Thai Lesson
        </h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Day 7"
        iconStyle={{ background: "#f77f00", color: "#fff" }}
        icon={<span></span>} // Replace with an actual icon if needed
      >
        <h3 className="vertical-timeline-element-title">
        Island Boat Trip
        </h3>
      </VerticalTimelineElement>
      {/* Add more VerticalTimelineElement components as needed */}
    </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
