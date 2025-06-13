'use client';

import * as React from "react";
import classNames from "classnames";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { NavigationMenu } from "radix-ui";
import styles from './desktop-menu.module.css'
import { useTranslations } from "next-intl";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";

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

export const DesktopMenu = () => {
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
        <NavigationMenu.Root  className={styles.Root}>
			<NavigationMenu.List  className={styles.MenuList}>
				<NavigationMenu.Item className={styles.Title}>
					<Text  weight={'bold'}>smart machines</Text>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Trigger className={styles.Trigger}>
						<Text size={'3'}>{navbar('products')}</Text> <CaretDownIcon className={styles.CaretDown} aria-hidden />
					</NavigationMenu.Trigger>
						<NavigationMenu.Content className={styles.Content}>
							<Flex width={{ initial: '100%', xs: '600px'}} wrap={'wrap'} gap={'6'} p={'3'}>
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
					<NavigationMenu.Trigger className={styles.Trigger}>
						<Text size={'3'}>{navbar('lang title')}</Text> <CaretDownIcon className={styles.CaretDown} aria-hidden />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className={styles.Content}>
							<ul className={styles.Languages}>
								<Button variant="outline" size={'1'} onClick={handleChange} data-lang='en'>
									English
								</Button>
								<Button variant="outline" size={'1'} onClick={handleChange} data-lang='ru'>
									Русский
								</Button>
							</ul>
						</NavigationMenu.Content>
				</NavigationMenu.Item>
			</NavigationMenu.List>

			<div className={styles.ViewportPosition}>
				<NavigationMenu.Viewport className={styles.Viewport} />
			</div>
		</NavigationMenu.Root>
    )
}