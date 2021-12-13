import tw from 'tailwind-styled-components';

export const AppMainContainer = tw.div`
    grid
    grid-cols-12
    gap-6
    my-14
    px-48
`;

export const LeftColumnContainer = tw.div`
    p-4
    col-span-12
    lg:col-span-3
    bg-blue-100
    rounded-2xl
    // text-center
    items-center
`;

export const RightColumnContainer = tw.div`
    col-span-12
    lg:col-span-9
    bg-blue-100
    rounded-2xl
    p-4
    text-center
`;
