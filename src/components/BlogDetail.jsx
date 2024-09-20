import React from 'react';
import { Link } from 'react-router-dom';

const BlogDetail = ({blogs}) => {

    return (
        <div className="md:p-12 p-3 ">
            {blogs &&
                blogs.c_t_a &&
                blogs.c_t_a.cta_bottom_title &&
                blogs.c_t_a.cta_bottom_description &&
                blogs.c_t_a.cta_top_image &&
                blogs.c_t_a.cta_top_link &&
                blogs.c_t_a.button_one_title &&
                blogs.c_t_a.button_two_title && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-6">
                                {blogs.c_t_a.cta_top_title}
                            </h2>
                            <p className="mb-6">{blogs.c_t_a.cta_top_description}</p>
                            <div className="flex gap-4">
                                <button
                                    className="bg-blue-600 text-sm md:text-base text-white py-2 px-4 rounded transition duration-200 hover:bg-blue-700 focus:outline-none"
                                >
                                    {blogs.c_t_a.button_one_title}
                                </button>
                                <Link to={blogs.c_t_a.cta_top_link} target="_blank">
                                    <button
                                        className="border text-sm border-blue-600 text-blue-600 py-2 px-4 rounded md:text-base transition duration-200 hover:bg-blue-600 hover:text-white focus:outline-none"
                                        onClick={() => window.open(blogs.c_t_a.cta_top_link, "_blank")}
                                    >
                                        {blogs.c_t_a.button_two_title}
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <img
                                src={`https://test.saeedantechpvt.com/${blogs.c_t_a.cta_top_image}`}
                                alt="CTA Image"
                                className="w-full h-[30vh] object-contain"
                            />
                        </div>
                    </div>
                )}
        </div>
    )
};

export default BlogDetail;
