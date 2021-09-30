import React from "react";

const Footer2 = () => {
  return (
    <div className="" style={styles.footer}>
      <div className="" style={styles.footerBody}>
        <p className="py-2 fw-light">* Our Bond Back Guarantee:</p>
        <p className="py-2 fw-light">
          1. You are required to confirm with your real estate agent which
          specific cleaning services are required under your lease agreement.
          You must ensure that you tick the appropriate checkboxes on our
          cleaning checklist when booking a Clean.
        </p>
        <p className="py-2 fw-light">
          2. If, within 72 hours after your Clean, we are notified by you or
          your real estate agent that a part of our Services (as described in
          your Booking and in our cleaning checklist) has not been completed
          satisfactorily to allow your tenancy bond to be released back to you,
          we will come back to your Residence to re-perform those Services for
          no additional fee (Bond Back Guarantee). Any such notification should
          include photographs evidencing the areas that need to be addressed and
          we will make an assessment of whether the area is cleanable.
        </p>
        <p className="py-2 fw-light">
          3. Our Bond Back Guarantee does not cover the following: (a) cleaning
          services not described in your Booking or cleaning checklist available
          on the Site; (b) permanent damage at your Residence, including smoke
          stains, carpet stains, hard water stains, wall marks, mould, rusting,
          grease stains, and permanent odours; and (c) areas which, in our
          professional opinion, cannot be cleaned
        </p>
      </div>
    </div>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333333",
    color: "#ffffff",
  },
  footerBody: {
    padding: " 9% 9%",
  },
};

export default Footer2;
