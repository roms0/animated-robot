'use client'

import React from "react";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { NavigationMenu } from "radix-ui"
import styles from './mobile-menu.module.css';
import classNames from "classnames";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { CaretDownIcon } from "@radix-ui/react-icons";

interface ListItemProps {
	className?: string,
	children?: React.ReactElement | React.ReactNode,
	title: string,
	href: string
}


const ListItem = React.forwardRef(
	({ className, children, title, ...props }: ListItemProps, forwardedRef: React.Ref<HTMLAnchorElement>) => (
		<Box className={styles.ItemList}>
			<NavigationMenu.Link asChild>
					<a
						className={classNames(styles.ListItemLink, className)}
						{...props}
						ref={forwardedRef}
						>
						<Heading size={'3'} className={styles.ListItemHeading}>{title}</Heading>
						{children}
					</a>
			</NavigationMenu.Link>
		</Box>
	),
);

export const MobileMenu = () => {
	const navbar = useTranslations('navbar');
	const main = useTranslations('main');
	const miles = useTranslations('miles');
	const highways = useTranslations('highways');
	const cargo = useTranslations('cargo');
	const broker = useTranslations('broker');
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams();
	const handleChange: React.MouseEventHandler = (e) => {
				if (!(e.target instanceof HTMLElement)) return;
				const lang = e.target.dataset?.lang
				console.log(lang)
				//@ts-expect-error
				router.replace({pathname, params}, {locale: lang})
		}
    return (
        <NavigationMenu.Root orientation='vertical' style={{'listStyleType': 'none'}}>
			<NavigationMenu.List>
				<NavigationMenu.Item>
					<NavigationMenu.Trigger>
						<Text size={'2'} weight={'bold'}>{navbar('products')}</Text> <CaretDownIcon className={styles.CaretDown} aria-hidden />
					</NavigationMenu.Trigger>
                    <NavigationMenu.Content>
                        <NavigationMenu.Sub style={{display:'flex', height: '100dvh', width: '100%'}}>
                            <NavigationMenu.List style={{listStyle: 'none'}}>
                                <NavigationMenu.Item>
                                    <NavigationMenu.Trigger>
                                        <Text size={'2'} weight={'bold'}>{navbar('products')}</Text> <CaretDownIcon className={styles.CaretDown} aria-hidden />
                                    </NavigationMenu.Trigger>
                                    <NavigationMenu.Content>
                                        <Flex wrap={'wrap'} gap={'6'} p={'3'}>
                                            <ListItem
                                                title={miles('title')}
                                                href="/primitives/docs/overview/introduction"
                                            >
                                                <Text color="gray">{miles('short')}</Text>
                                            </ListItem>
                                            <ListItem
                                                title={highways('title')}
                                                href="/primitives/docs/overview/introduction"
                                            >
                                                <Text color="gray">{highways('short')}</Text>
                                            </ListItem>
                                            <ListItem
                                                title={cargo('title')}
                                                href="/primitives/docs/overview/introduction"
                                            >
                                                <Text color="gray">{cargo('short')}</Text>
                                            </ListItem>
                                            <ListItem
                                                title={broker('title')}
                                                href="/primitives/docs/overview/introduction"
                                            >
                                                <Text color="gray">{broker('short')}</Text>
                                            </ListItem>
                                        </Flex>
                                    </NavigationMenu.Content>
                                </NavigationMenu.Item>
                                <NavigationMenu.Item>
                                    <NavigationMenu.Trigger>
                                        <Text size={'2'} weight={'bold'}>{navbar('products')}</Text> <CaretDownIcon className={styles.CaretDown} aria-hidden />
                                    </NavigationMenu.Trigger>
                                    <NavigationMenu.Content>
                                        <p>content</p>
                                    </NavigationMenu.Content>
                                </NavigationMenu.Item>
                                <NavigationMenu.Item>
                                    <NavigationMenu.Trigger>
                                        <Text size={'2'} weight={'bold'}>{navbar('products')}</Text> <CaretDownIcon className={styles.CaretDown} aria-hidden />
                                    </NavigationMenu.Trigger>
                                    <NavigationMenu.Content>
                                        <p>content</p>
                                    </NavigationMenu.Content>
                                </NavigationMenu.Item>
                            </NavigationMenu.List>
                            <NavigationMenu.Viewport style={{zIndex: 1, flexGrow: 1, flexShrink: 0, backgroundColor: 'white', padding: '12px'}}/>
                        </NavigationMenu.Sub>
                    </NavigationMenu.Content>
				</NavigationMenu.Item>
			</NavigationMenu.List>
			<NavigationMenu.Viewport style={{position: 'absolute', zIndex: 1, width: '100%',  backgroundColor: 'white', padding: '12px'}} />
		</NavigationMenu.Root>
    )
}