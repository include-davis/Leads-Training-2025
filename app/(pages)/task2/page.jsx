import styles from "./page.module.scss"
import Card from "../_components/Card/Card"

const pictures = [
	{
		id: 1,
		imageURL: "/task2/deer.png"
	},
	{
		id: 2,
		imageURL: "/task2/bridge.png"
	},
	{
		id: 3,
		imageURL: "/task2/park.png"
	}
]

export default function Task2() {
	return (
		<div className={styles.container}>
			<Card imageURL = {pictures[0].imageURL}/>
			<Card imageURL = {pictures[1].imageURL}/>
			<Card imageURL = {pictures[2].imageURL}/>
		</div>
	)
}