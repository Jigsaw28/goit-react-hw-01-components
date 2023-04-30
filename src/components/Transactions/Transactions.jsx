import PropTypes from 'prop-types';
import { TableTransactions, HeadTransactions, ColHead, ColBody, RowBody } from './Transactions.styled';

export const Transactions = ({ items }) => {
  return (
    <TableTransactions>
      <HeadTransactions>
        <tr>
          <ColHead>Type</ColHead>
          <ColHead>Amount</ColHead>
          <ColHead>Currency</ColHead>
        </tr>
      </HeadTransactions>
      <tbody>
        {items.map(item => (
          <ColBody key={item.id}>
            <RowBody>{item.type}</RowBody>
            <RowBody>{item.amount}</RowBody>
            <RowBody>{item.currency}</RowBody>
          </ColBody>
        ))}
      </tbody>
    </TableTransactions>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
