import React from 'react';
import { Head as SeoHead, usePage } from '@inertiajs/react';
import favicon from "../../../public/assets/favicon.png";

const Head = ({title, description, keywords}) => {

    const {url} = usePage();
    const {app} = usePage().props;

    return (
        <SeoHead>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="shortcut icon" href={favicon} type="image/x-icon" />

                <meta name='name' content={title} />
                <meta name='image' content={favicon} />

                {/* Twitter Card Data */}
                <meta name='twitter:site' content={app.name} />
                <meta name='twitter:card' content={app.name} />
                <meta name='twitter:creator' content={app.name} />
                <meta name='twitter:title' content={title} />
                <meta name='twitter:description' content={description} />
                <meta name='twitter:image:src' content={favicon} />

                {/* Open Graph Data  */}
                <meta name='og:site_name' content={app.name} />
                <meta name='og:url' content={app.url + url} />
                <meta name='og:type' content="website" />
                <meta name='og:title' content={title} />
                <meta name='og:description' content={description} />
                <meta name='og:image' content={favicon} />
        </SeoHead>
    );
};

export default Head;
