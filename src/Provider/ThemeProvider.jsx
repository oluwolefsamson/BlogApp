"use client"

import React, { useEffect, useState } from 'react'
import { ThemeContext } from '@/Context/ThemeContext';
import { useContext } from 'react';

const ThemeProvider = ({children}) => {

    const {theme} = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
      setMounted(true)
    }, []);

    if (mounted) {
        return <div className={theme}>{children}</div>
    }
  
}

export default ThemeProvider;



