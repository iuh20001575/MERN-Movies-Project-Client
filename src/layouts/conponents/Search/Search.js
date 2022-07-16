import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { CloseIcon, SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import SearchTippy from './SearchTippy';

const cx = classNames.bind(styles);

const Search = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div>
            <Tippy
                interactive
                visible={!!searchValue}
                maxWidth="100%"
                placement="bottom"
                render={(attrs) => (
                    <SearchTippy value={searchValue} {...attrs} />
                )}
            >
                <div className="focus-within:border-[#444] transition-all duration-300 w-search h-search flex flex-row-reverse items-center border-2 border-[#e8e8e8] rounded-full overflow-hidden">
                    {searchValue && (
                        <span
                            onClick={() => setSearchValue('')}
                            className="cursor-pointer text-[#7b7b7b] p-2"
                        >
                            <CloseIcon width="20px" height="20px"></CloseIcon>
                        </span>
                    )}
                    <input
                        className={`${cx(
                            'search-input',
                        )} text-sm leading-[1.15] search__input px-2 h-full flex-1 outline-none border-0`}
                        type="text"
                        placeholder="Search movies..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <span
                        className={`${cx(
                            'search-icon',
                        )} cursor-pointer flex items-center px-2 h-full text-[#7c7c7c]`}
                    >
                        <SearchIcon width="20px" height="20px"></SearchIcon>
                    </span>
                </div>
            </Tippy>
        </div>
    );
};

export default Search;