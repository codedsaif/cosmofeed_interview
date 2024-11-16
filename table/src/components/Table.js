import React from "react";
import styles from "../styles/Table.module.css";
const tableHeaderItems = [
  "Date",
  "Total Accounts",
  "KYC Completed",
  "First Product Created",
  "Earning Started",
  "Saas Subscribers",
];
const Table = () => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            {tableHeaderItems.map((item, index) => (
              <th className={styles.td} key={index}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {/* <tr className={styles.tr}>
            {tableHeaderItems.map((item, index) => {
              return (
                <>
                  <td className={styles.phoneTdBefore}>{item}</td>
                  <td className={styles.td} key={index}>
                    {item}
                  </td>
                </>
              );
            })}
          </tr>
          <tr className={styles.tr}>
            {tableHeaderItems.map((item, index) => {
              return (
                <>
                  <td className={styles.phoneTdBefore}>{item}</td>
                  <td className={styles.td} key={index}>
                    {item}
                  </td>
                </>
              );
            })}
          </tr> */}
          {Array(10)
            .fill(null)
            .map((_, rowIndex) => (
              <tr className={styles.tr} key={rowIndex}>
                {tableHeaderItems.map((item, index) => (
                  <>
                    <td className={styles.phoneTdBefore}>{item}</td>
                    <td className={styles.td} key={index}>
                      {item}
                    </td>
                  </>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
