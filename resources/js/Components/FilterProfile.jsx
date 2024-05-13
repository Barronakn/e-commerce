import React, { useState } from "react";

const FilterProfile = ({ handleFilterByType }) => {
    return (
        <form className="flex xl:flex-col flex-row">
            <div>
                <div>
                    <h2 className="font-bold">Page</h2>
                </div>
                <div className="flex flex-col gap-4 m-4">
                    <div className="flex flex-row gap-1 items-center">
                        <input
                            name="profil"
                            type="radio"
                            onChange={() => {
                                handleFilterByType("01 page");
                            }}
                        />
                        <label>01 Page</label>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <input
                            name="profil"
                            type="radio"
                            onChange={() => {
                                handleFilterByType("02 pages");
                            }}
                        />
                        <label>02 Pages</label>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h2 className="font-bold">Profile</h2>
                </div>
                <div className="flex flex-col gap-4 m-4">
                    <div className="flex flex-row gap-1 items-center">
                        <input
                            name="profil"
                            type="radio"
                            onChange={() => {
                                handleFilterByType("junior");
                            }}
                        />
                        <label htmlFor="">Junior</label>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <input
                            name="profil"
                            type="radio"
                            onChange={() => {
                                handleFilterByType("confirmé");
                            }}
                        />
                        <label htmlFor="">Confirmé</label>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <input
                            name="profil"
                            type="radio"
                            onChange={() => {
                                handleFilterByType("senior");
                            }}
                        />
                        <label htmlFor="">Senior</label>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default FilterProfile;
