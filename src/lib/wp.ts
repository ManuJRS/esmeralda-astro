const domain = import.meta.env.WP_DOMAIN;
const apiUrl = `${domain}/wp-json/acf/v3`;

export const getPageInfo = async (slug: string) => {
    const response = await fetch(`${apiUrl}/pages?slug=${slug}`);
    if (!response.ok) throw new Error("Error al hacer fetching de la página");

    const [data] = await response.json();

    const { acf } = data;

    return {
        acf,
    };
};
