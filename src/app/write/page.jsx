"use client"

import { useState, useEffect } from 'react';
import styles from './writePage.module.css';
import Image from 'next/image';
import "react-quill/dist/quill.bubble.css";
import ReactQuill from 'react-quill';

const WritePage = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    useEffect(() => {
        // Check if document is defined (client-side environment)
        if (typeof document !== 'null') {
            // Accessing document here is safe
            // You can perform any client-side operations that involve the DOM
        }
    }, []);

    return (
        <div className={styles.container}>
            <input type="text" placeholder="Title" className={styles.input}/>
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src="/plus.png" alt="" width={16} height={16}/>
                </button>
                {open && (
                    <div className={styles.add}>
                        <button className={styles.addButton}>
                            <Image src="/image.png" alt="" width={16} height={16}/>
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/external.png" alt="" width={16} height={16}/>
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/video.png" alt="" width={16} height={16}/>
                        </button>
                    </div>
                )}
                <ReactQuill
                    className={styles.textArea}
                    theme='bubble'
                    value={value} 
                    onChange={setValue} 
                    placeholder='Tell us your story.....'
                />
            </div>
            <button className={styles.publish}>Publish</button>
        </div>
    );
}

export default WritePage;
