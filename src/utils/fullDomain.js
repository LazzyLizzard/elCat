export const fullDomain = (domainStructure) => {
    const {
        protocol, host, port
    } = domainStructure;
    const portNumber = port ? `:${port}` : '';
    return `${protocol}${host}${portNumber}`;
};
