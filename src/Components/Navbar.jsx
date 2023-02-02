import {BreadcrumbItem,BreadcrumbLink,Breadcrumb, } from "@chakra-ui/react";

export default function Navbar() {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>login</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/songs'>Songs</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </>
    )
}