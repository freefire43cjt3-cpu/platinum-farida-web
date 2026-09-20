import { motion } from "framer-motion";
import {
  CreditCard,
  Copy,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import "./Payment.css";

const accounts = [
  {
    id: 1,
    bank: "FCMB",
    accountName: "Platinum Farida Foods Services Nig. Ltd.",
    accountNumber: "2632957010",
    image: "/images/fcmb.jpeg",
  },
  {
    id: 2,
    bank: "ZENITH BANK",
    accountName: "Platinum Farida Foods Services Nig. Ltd.",
    accountNumber: "1016242417",
    image: "/images/zenith.jpeg",
  },
];

function Payment() {
  const [copiedAccount, setCopiedAccount] = useState("");

  const copyAccountNumber = async (accountNumber) => {
    try {
      await navigator.clipboard.writeText(accountNumber);

      setCopiedAccount(accountNumber);

      setTimeout(() => {
        setCopiedAccount("");
      }, 2500);
    } catch (error) {
      console.error("Unable to copy account number:", error);
    }
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Platinum Farida, I have made payment for my order. Please confirm my payment."
  );

  return (
    <section className="payment-section" id="payment">
      <div className="payment-glow payment-glow-left"></div>
      <div className="payment-glow payment-glow-right"></div>

      <div className="payment-container">

        {/* HEADER */}
        <motion.div
          className="payment-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="payment-label">
            PAYMENT OPTIONS
          </span>

          <h2>
            Make Your <strong>Payment</strong>
          </h2>

          <p>
            After placing your order, make your payment using
            any of the bank accounts below and send your payment
            confirmation to Platinum Farida.
          </p>
        </motion.div>

        {/* PAYMENT CARDS */}
        <div className="payment-grid">

          {accounts.map((account, index) => (
            <motion.div
              className="payment-card"
              key={account.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
            >

              {/* BANK IMAGE */}
              <div className="bank-image">
                <img
                  src={account.image}
                  alt={`${account.bank} logo`}
                />
              </div>

              <div className="payment-card-content">

                <span className="payment-method">
                  BANK TRANSFER
                </span>

                <h3>{account.bank}</h3>

                {/* ACCOUNT NAME */}
                <div className="payment-detail">
                  <span>ACCOUNT NAME</span>

                  <strong>
                    {account.accountName}
                  </strong>
                </div>

                {/* ACCOUNT NUMBER */}
                <div className="payment-detail account-number-detail">
                  <div>
                    <span>ACCOUNT NUMBER</span>

                    <strong>
                      {account.accountNumber}
                    </strong>
                  </div>

                  <button
                    type="button"
                    className="copy-button"
                    onClick={() =>
                      copyAccountNumber(account.accountNumber)
                    }
                  >
                    {copiedAccount === account.accountNumber ? (
                      <>
                        <CheckCircle2 size={15} />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={15} />
                        Copy
                      </>
                    )}
                  </button>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* PAYMENT INSTRUCTION */}
        <motion.div
          className="payment-instruction"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CreditCard size={20} />

          <p>
            Please confirm the account name and account number
            before making your transfer.
          </p>
        </motion.div>

        {/* CONFIRM PAYMENT */}
        <motion.div
          className="payment-confirmation"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div>
            <span>PAYMENT COMPLETED?</span>

            <h3>
              Send your payment confirmation
            </h3>

            <p>
              After making your transfer, contact Platinum
              Farida on WhatsApp so your payment can be confirmed.
            </p>
          </div>

          <a
            href={`https://wa.me/2348036453718?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="payment-whatsapp"
          >
            <MessageCircle size={18} />
            I've Made Payment
          </a>
        </motion.div>

        <p className="payment-note">
          Orders are processed after payment has been confirmed.
        </p>

      </div>
    </section>
  );
}

export default Payment;