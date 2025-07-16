import styles from "./Card.module.scss"
import Image from "next/image"

export default function Card({imageURL}) {
	return (
		<div className={styles.card}>
			<div className={styles.picture}>
				<Image 
				src={imageURL}
				width={400}
				height={425}
				alt="Card Picture"
				/>
			</div>
		</div>
	)
}