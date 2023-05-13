import { useEffect, useState } from 'react';
import styles from '../styles/Coupons.module.css';

const couponList = [
  {
    name: 'Date Night',
    details:
      'This coupon is good for one date night with the one and only Kenny Tye. Redeemable on a date and time of your choosing.',
    subdetails: 'All activities to be planned and paid for by Kenny Tye.',
  },
  {
    name: 'Household Chore',
    details:
      'This coupon is good for one household chore to be completed by Kenny Tye. Redeemable on a date and time of your choosing.',
    subdetails:
      'Chores are not to be limited to the kitchen and guest bathroom.',
  },
  {
    name: 'Day Trip',
    details:
      'This coupon is good for one day trip with the love of your life, Kenny Tye. Redeemable on a date and time of your choosing.',
    subdetails:
      'Day Trip is limited to a 50 mile radius from the home of Kenny Tye. Penalties will incure for any mileage over 50 miles.',
  },
  {
    name: 'Night Off',
    details:
      'This coupon is good for one night off from all household duties. Redeemable on a date and time of your choosing.',
    subdetails:
      'Kenny Tye will be responsible for all household duties for the duration of the night off. Baby duties are included with this coupon.',
  },
  {
    name: 'Weekend Getaway',
    details:
      'This coupon is good for one weekend getaway with the handsome devil, Kenny Tye. Redeemable on a date and time of your choosing.',
    subdetails:
      'The location must be reachable by car. All costs incured will be covered by Kenny Tye.',
  },
  {
    name: 'Girls Night',
    details:
      'This ticket is good for one girls night.  Redeemable on a date and time of your choosing.',
    subdetails: 'No bed time, no questions asked.',
  },
  {
    name: 'Massage',
    details:
      'This coupon is good for one massage from the tender hands of Kenny Tye. Redeemable on a date and time of your choosing.',
    subdetails:
      'Massage is limited to 30 minutes. Additional time may be purchased at a rate of $10 per minute. Quality of massage is not guaranteed.',
  },
];

function KellysCoupons(): JSX.Element {
  const [currentTicket, setCurrentTicket] = useState<number>(0);

  useEffect(() => {
    // update the --background-primary variable in the document's root
    // element to the background color of the current ticket
    document.documentElement.style.setProperty(
      '--background-primary',
      '#f5cbe9'
    );
  }, []);

  return (
    <>
      <div className={styles.backgroundOverlay}></div>
      <section className={styles.root}>
        <h2 className={styles.header}>Kelly's Fun Tickets</h2>
        <div className={styles.couponContainer}>
          {couponList.map((item, index) => {
            if (index === currentTicket) {
              return (
                <div className={styles.couponCard} key={item.name}>
                  <div>
                    <p className={styles.super}>Ticket redeemable for one...</p>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.details}>{item.details}</p>
                  </div>
                  <div>
                    <p className={styles.subdetails}>{item.subdetails}</p>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            onClick={() => {
              if (currentTicket > 0) {
                setCurrentTicket(currentTicket - 1);
              }
            }}
          >
            Previous
          </button>
          <button className={styles.button}>Redeem</button>
          <button
            className={styles.button}
            onClick={() => {
              if (currentTicket < couponList.length - 1) {
                setCurrentTicket(currentTicket + 1);
              }
            }}
          >
            Next
          </button>
        </div>
        <div className={styles.countContainer}>
          <p className={styles.count}>
            {currentTicket + 1} of {couponList.length}
          </p>
        </div>
      </section>
    </>
  );
}

export default KellysCoupons;
