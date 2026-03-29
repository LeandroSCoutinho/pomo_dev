import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';

import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type AvaliableTheme = 'light'|'dark';

export function Menu(){

    const [theme, setTheme] = useState<AvaliableTheme>(() =>{
        const storageTheme = (localStorage.getItem('theme') as AvaliableTheme) || 'dark';

        return storageTheme;
    });

    const iconTheme = {
        light:<MoonIcon />,
        dark: <SunIcon />,
    }

    function handleChageTheme( event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault();

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    }

    useEffect(()=>{
        document.documentElement.setAttribute('data-theme',theme);
        localStorage.setItem('theme', theme);
    },[theme]);

    return (
        <div className={styles.menu}>
            <a className={styles.menuLink} 
                href="" 
                aria-label='Ver histórico' 
                title='Ver histórico'>
                <HistoryIcon />
            </a>

            <a className={styles.menuLink} 
                href="" 
                aria-label='Acessar página inicial' 
                title='Acessar página inicial'>
                <HouseIcon />
            </a>

            <a className={styles.menuLink} 
                href="" 
                aria-label='Acessar configurações' 
                title='Acessar configurações'>
                <SettingsIcon/>
            </a>

            <a className={styles.menuLink} 
                href="" 
                aria-label='Trocar tema' 
                title='Trocar tema'
                onClick={handleChageTheme}>
                {iconTheme[theme]}
            </a>
        </div>
    );
}