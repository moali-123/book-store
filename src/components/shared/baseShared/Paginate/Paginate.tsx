import ReactPaginate from 'react-paginate';
import IMAGES from '@assets/images/images';
import './Paginate.scss';

const Paginate = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel={<img src={IMAGES.orangeLeftArrow} />}
      nextLabel={<img src={IMAGES.orangeRightArrow} />}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName={'pagination'}
      activeClassName={'active'}
      previousClassName={'prev_btn'}
      previousLinkClassName={'prev_btn_item'}
      nextClassName={'next_btn'}
      nextLinkClassName={'next_btn_item'}
      pageClassName={'page_btn'}
      pageLinkClassName={'page_btn_item'}
    />
  )
}

export default Paginate