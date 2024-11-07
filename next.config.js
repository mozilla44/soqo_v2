/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/projets/adidas-arena',  
        destination: '/projets',     
        permanent: true,                  
      },
      {
        source: '/projets/des-etoiles-et-des-femmes-par-weavers-and-lavazza(.*)', // Regex match for variations
        destination: '/projets',
        permanent: true,
      },
      {
        source: '/projets/autremonde-6eme_sens(.*)', // Regex match for variations
        destination: '/projets',
        permanent: true,
      },
     
    ];
  },
}

module.exports = nextConfig;
