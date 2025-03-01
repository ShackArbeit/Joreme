import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   webpack(config){
        config.cache={
            type:'filesystem',
            compression:'gzip',
            allowCollectingMemory:true
        }
        return config
   },
   experimental: {
    optimizePackageImports: ["@chakra-ui/react","@mantine/core", "@mantine/hooks"]
  },
};

export default nextConfig;
