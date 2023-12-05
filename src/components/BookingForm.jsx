import React, { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasions, setOccasions] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };
  return (
    <header>
      <section>
        <form action="" onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                id="book-date"
                required
              />
            </div>
            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select
                name=" "
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
              >
                <option value="">Choose Time</option>
                {props.availableTimes.availableTimes.map((availableTime) => {
                  return <option key={availableTime}>{availableTime}</option>;
                })}
              </select>
            </div>
            <div>
              <label htmlFor="book-guests">Number Of Guests:</label>
              <input
                type=""
                name=""
                id="book-guests"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                name=""
                id="book-occasion"
                key={occasions}
                value={occasions}
                onChange={(e) => setOccasions(e.target.value)}
              >
                <option value="">Birthday</option>
                <option value="">Anniversary</option>
              </select>
            </div>

            <div className="btnReceive">
              <button type="submit" aria-label="Click to make your reservation">
                Make Your Reservation
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
