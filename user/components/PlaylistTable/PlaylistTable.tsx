'use client'
import { Button, FlexContainer, Input, MainContainer, Subtitle, SvgContainer, TableBody, TableCell, TableContainer, TableHead, TableHeaderCell, TableHeaderId, TableId, TableRow, Title,Image } from "@styles/PlaylistTable/style";
import { useReducer } from "react";

const PlaylistTable = () => {

    const initialState = {
        defaultValue: "Sort by: Most Recent",
        dropdown: false,
    }

    const reducer = (state: any, action: { type: any; payload: any; }) => {
        switch (action.type) {
            case 'SET_FILTER':
                return {
                    ...state,
                    defaultValue: action.payload,
                    dropdown: false,
                }
            case 'TOGGLE_DROPDOWN':
                return {
                    ...state,
                    dropdown: !state.dropdown,
                };
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleDropdown = () => {
        console.log(state.dropdown);
        dispatch({
            type: 'TOGGLE_DROPDOWN',
            payload: undefined
        })
    }

    const handleOptionChange = (value: any) => {
        console.log(value);
        dispatch({ type: 'SET_FILTER', payload: value })
    }

    const options = [
        "Most Popular",
        "Top Rated",
        "Most Played",
    ]

    return (

        <MainContainer>
            <TableContainer>
                <div
                    id="search-action-section"
                    className="flex flex-wrap items-center justify-between py-4 px-2 gap-4"
                >
                    <div className="flex-grow">
                        <div className="relative w-full">
                            <SvgContainer>
                                <svg
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </SvgContainer>
                            <Input
                                type="text"
                                id="table-search-users"
                                placeholder="Search"
                            // value={searchQuery}
                            // onChange={handleSearchInputChange}
                            />
                        </div>
                    </div>
                    <FlexContainer>
                        <Button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" onClick={toggleDropdown}>
                            <span className="sr-only" onChange={handleOptionChange}>Action button</span>
                            {state.defaultValue}
                            <svg
                                className="w-3 h-3 ml-2"
                                aria-hidden="true"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </Button>
                        {
                            state.dropdown && (
                                <div
                                    id="dropdownAction"
                                    className="z-10 absolute mt-[4vw] overflow-hidden bg-white rounded-lg shadow w-44 dark:bg-[#1F222880] dark:divide-gray-600"
                                >
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                                        {options.map((option, index) => (
                                            <li key={index}>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleOptionChange(option)}>{option}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        }
                    </FlexContainer>
                </div>
                <table
                    // ref={tableRef as React.RefObject<HTMLTableElement>}
                    className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                >
                    <TableHead>
                        <tr>
                            <TableHeaderId>
                                #
                            </TableHeaderId>
                            <TableHeaderCell>
                                Title
                            </TableHeaderCell>
                            <TableHeaderCell>
                                Album
                            </TableHeaderCell>
                            <TableHeaderCell>
                                Date Added
                            </TableHeaderCell>
                            <TableHeaderCell>
                                Duration
                            </TableHeaderCell>
                        </tr>
                    </TableHead>
                    {/* {songs.map(song => ( */}
                    <TableBody>
                        <TableRow>
                            <TableId>
                                01
                            </TableId>
                            <TableCell scope="row">
                                <div className="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <Image
                                        src="https://practicaltyping.com/wp-content/uploads/2022/01/ayanokoji.jpg"
                                        alt="Jese image"
                                    />
                                    <div className="pl-3">
                                        <Title>Feel It Still</Title>
                                        <Subtitle>Portugal. The Man</Subtitle>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                Woodstock
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center">2 days ago</div>
                            </TableCell>
                            <TableCell>
                                2:43
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableId>
                                01
                            </TableId>
                            <TableCell scope="row">
                                <div className="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <Image
                                        src="https://practicaltyping.com/wp-content/uploads/2022/01/ayanokoji.jpg"
                                        alt="Jese image"
                                    />
                                    <div className="pl-3">
                                        <Title>Feel It Still</Title>
                                        <Subtitle>Portugal. The Man</Subtitle>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                Woodstock
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center">2 days ago</div>
                            </TableCell>
                            <TableCell>
                                2:43
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </table>
            </TableContainer >
        </MainContainer >
    );
}

export default PlaylistTable;