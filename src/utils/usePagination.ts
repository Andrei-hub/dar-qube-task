import { useState } from 'react';

function usePagination<T>(data: T[], itemsPerPage: number) {
	const [currentPage, setCurrentPage] = useState(1);
	const maxPage = Math.ceil(data.length / itemsPerPage);
	const totalItems = Math.ceil(data.length);
	const rangeStart = Math.ceil(currentPage * itemsPerPage - itemsPerPage + 1);
	const rangeEnd = Math.ceil(rangeStart + itemsPerPage - 1);
	const rangeOf = `${rangeStart}-${rangeEnd}`;

	function currentData() {
		const begin = (currentPage - 1) * itemsPerPage;
		const end = begin + itemsPerPage;
		return data.slice(begin, end);
	}

	function next() {
		setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
	}

	function prev() {
		setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
	}

	function jump(page: number) {
		const pageNumber = Math.max(1, page);
		setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
	}

	return { next, prev, jump, currentData, currentPage, rangeOf, totalItems, maxPage };
}

export default usePagination;
