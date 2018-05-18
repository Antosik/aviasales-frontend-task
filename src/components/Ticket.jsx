import React from "react";
import styled from "styled-components";

const TicketContainer = styled.div`
  box-shadow: 0px 1px 4px rgba(91, 137, 163, 0.25);
  background: #fff;
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const BuySide = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #eceff1;

  @media (min-width: 1024px) {
    flex: 0 0 200px;
  }
`;
const CarrierLogo = styled.img`
  width: 120px;
  height: 35px;
  background: #f2fcff;
  margin: 10px;
`;
const BuyButton = styled.a`
  width: 160px;
  background: #ff6c00;
  color: #ffffff;
  font-size: 14px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 0px #d54d08;
  text-align: center;
  border-radius: 4px;
  padding: 8px;
  text-decoration: none;
  height: auto;  

  @media (min-width: 1024px) {
    padding: 6px 28px;
    height: 56px;  
    font-size: 16px;
  }

  &:hover {
    background: #ff8123;
    box-shadow: 0px 1px 5px rgba:(0,0,0,0.25);
    box-shadow: 0px 1px 0px #f6661c;
  }
`;

const TravelSide = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  flex: 1 0 auto;
  padding: 4px;
  margin-top: 8px;

  @media (min-width: 1024px) {
    padding: 24px;
    margin-top: 0;
  }
`;
const TravelInfo = styled.div`
  padding: 4px;

  &:first-child {
    text-align: left;
  }
  &:last-child {
    text-align: right;
  }
`;
const TravelTime = styled.div`
  color: #494949;
  font-size: 20px;

  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;
const TravelDate = styled.div`
  color: #8a9496;
  font-size: 12px;
`;
const TravelSource = styled.div`
  color: #494949;
  font-size: 12px;
`;
const TravelStops = styled.div`
  color: #8a9496;
  font-size: 10px;
  text-transform: uppercase;
  position: absolute;
  text-align: center;
  width: 100%;

  @media (min-width: 1024px) {
    position: relative;
    width: auto;
    flex: 1 0 auto;
  }

  &:before {
    content: "";
    border-bottom: 1px solid #d2d5d6;
    position: absolute;
    top: 20px;
    width: 50%;
    left: 25%;
  }

  &:after {
    content: "✈";
    color: #d2d5d6;
    font-size: 16px;
    position: absolute;
    top: 9px;
    width: 50%;
    left: 25%;
    text-align: right;
  }
`;

function formatDate(dateString) {
  const weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const months = [
    "янв",
    "февр",
    "марта",
    "апр",
    "мая",
    "июня",
    "июля",
    "авг",
    "сент",
    "окт",
    "нояб",
    "дек"
  ];

  const [day, month, year] = dateString.split(".").map(Number);
  const date = new Date(year + 2000, month - 1, day);

  const weekday = weekdays[date.getDay()];
  const monthStr = months[date.getMonth()];

  return `${date.getDate()} ${monthStr} ${date.getFullYear()}, ${weekday}`;
}

export default function Ticket(ticket) {
  return (
    <TicketContainer>
      <BuySide>
        <CarrierLogo alt={ticket.carrier} />
        <BuyButton href="#">
          Купить за {ticket.price}​ {ticket.currencySign}
        </BuyButton>
      </BuySide>
      <TravelSide>
        <TravelInfo>
          <TravelTime>{ticket.departure_time}</TravelTime>
          <TravelSource>
            {ticket.origin}, {ticket.origin_name}
          </TravelSource>
          <TravelDate>{formatDate(ticket.departure_date)}</TravelDate>
        </TravelInfo>
        {!!ticket.stops && <TravelStops>Пересадок: {ticket.stops}</TravelStops>}
        <TravelInfo>
          <TravelTime>{ticket.arrival_time}</TravelTime>
          <TravelSource>
            {ticket.destination}, {ticket.destination_name}
          </TravelSource>
          <TravelDate>{formatDate(ticket.arrival_date)}</TravelDate>
        </TravelInfo>
      </TravelSide>
    </TicketContainer>
  );
}
