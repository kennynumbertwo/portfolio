import { useEffect, useState } from 'react';
import styles from '../styles/Coupons.module.css';
import Image from 'next/image';
import KellyRuby from '../public/kelly-ruby-1.jpeg';
import KellyRuby2 from '../public/kelly-ruby-2.jpg';

const couponList = [
  {
    name: 'Day Trip',
    details:
      'This coupon is good for one day trip with the loves of your life, Kenny and Ruby.',
    subdetails:
      'This ticket has already been redeemed. Please mark your calendars for the weekend of August 12 & 13th. Details will be revealed at a future date. Please plan to be outside and in the elements.',
    notes: 'Ventura County Fair',
  },
  {
    name: 'Day Trip',
    details:
      'This coupon is good for one day trip with the loves of your life, Kenny & Ruby. Redeemable on a date and time of your choosing.',
    subdetails:
      'This event is limited to a 60 mile radius. Penalties will incure for any mileage over 50 miles.',
  },
  {
    name: 'Facial',
    details:
      'This coupon is good for one facial. Please use the included gift card when booking your appointment.',
    subdetails:
      '$250 gift card for AskCares Skincare in Studio City. Code: GCGL-WUV9-EE2Y-QLTV',
  },
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
    name: 'Night Off',
    details:
      'This coupon is good for one night off from all household duties. Redeemable on a date and time of your choosing.',
    subdetails:
      'Kenny Tye will be responsible for all household duties for the duration of the night off. Baby duties are included with this coupon.',
  },
  {
    name: 'Weekend Getaway',
    details:
      'This coupon is good for one weekend getaway with Kenny and Ruby. Redeemable on a date and time of your choosing.',
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
  const [redeemedTickets, setRedeemedTickets] = useState<number[]>([0, 2]);
  const [showLetter, setShowLetter] = useState<boolean>(false);

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
        <h2 className={styles.header}>Happy Mother's Day!</h2>
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
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          {redeemedTickets.includes(currentTicket) ? (
            <button
              className={styles.redeemButtonRedeemed}
              onClick={() => {
                if (!redeemedTickets.includes(currentTicket)) {
                  setRedeemedTickets([...redeemedTickets, currentTicket]);
                }
              }}
            >
              Already Redeemed!
            </button>
          ) : (
            <button
              className={styles.redeemButton}
              onClick={() => {
                if (!redeemedTickets.includes(currentTicket)) {
                  setRedeemedTickets([...redeemedTickets, currentTicket]);
                }
              }}
            >
              Redeem
            </button>
          )}
        </div>
        <div className={styles.countContainer}>
          <p className={styles.count}>
            {currentTicket + 1} of {couponList.length}
          </p>
        </div>
        <div className={styles.letterButtonWrapper}>
          <button
            className={styles.letterButton}
            onClick={() => setShowLetter(true)}
          >
            For Ruby's Mom
          </button>
        </div>
        {showLetter && (
          <div className={styles.letterContainer}>
            <div className={styles.letter}>
              <div className={styles.imageWrapper}>
                <Image src={KellyRuby} />
              </div>

              <p>Dear Kelly</p>
              <p>
                Happy Mother’s Day! I can’t believe it’s already your second
                Mother’s Day. It seems like it just yesterday we were going to
                your doctor appointments, preparing Ruby’s room, deciding on a
                name and wondering what our daughter would be like.
              </p>
              <p>
                I feel so lucky to watch you be a mother to Ruby. You are
                thoughtful in everything you do for her. You are patient in
                everything you show and teach her. I love hearing you carefully
                explain new things to her from the other room. I love how
                excited you get when she looks cute in a new outfit that you
                bought for her. I love the little “brusha brusha brusha”
                toothbrush song you came up with and I love hearing you sing it
                to her at night.
              </p>
              <div className={styles.imageWrapper}>
                <Image src={KellyRuby2} />
              </div>
              <p>
                I am so thankful for you. You are the glue of our family. You
                take on so much responsibility for us. You are an absolutely
                incredible mom, partner, friend, sister and person. You take on
                everything selflessly and are so compassionate and giving to the
                people you love. I want you to know how much I love and
                appreciate you. Thank you for being the best partner to me in
                this crazy life. Thank you for being the best mom.{' '}
              </p>
              <p>Love, Kenny</p>

              <button onClick={() => setShowLetter(false)}>Close</button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default KellysCoupons;
