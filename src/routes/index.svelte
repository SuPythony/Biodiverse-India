<script lang="ts" context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import Cards from "$lib/components/Cards.svelte";
	import Card from "$lib/components/Card.svelte";
	import Question from "$lib/components/Question.svelte";
	import { SvelteToast } from "@zerodevx/svelte-toast";
	import HoverText from "$lib/components/HoverText.svelte";
	import { onMount } from "svelte";
	import { scale } from "svelte/transition";
	import MdClose from "svelte-icons/md/MdClose.svelte";
	import { openIndex } from "$lib/stores";
	import FaGithub from "svelte-icons/fa/FaGithub.svelte";

	let forestClicked = 0;
	let Carousel;
	onMount(async () => {
		const module = await import("svelte-carousel");
		Carousel = module.default;
	});
</script>

<SvelteToast options={{ duration: 2000 }} />

<div class="relative top-0">
	<Cards noOfCards={10} on:next={() => (forestClicked = 0)} on:previous={() => (forestClicked = 0)}>
		<Card title="Biodiversity of India!">
			<p>
				India is a rich and diverse country with various cultures, languages, dances etc. But
				India's diversity doesn't just doesn't end there. India is also full of thousands of species
				of plants and animals, each unique in its own way.
			</p>
			<br />
			<p>India is one of the <b>17 megadiverse</b> countries in the world.</p>
			<br />
			<h3 class="font-bold text-xl">By the numbers:</h3>
			<br />
			<ul class="list-disc ml-3">
				<li>India accounts for <b>7-8%</b> of all the recorded species.</li>
				<li>India houses over <b>45,000</b> species of plants.</li>
				<li>India also boasts over <b>91,000</b> species of animals.</li>
			</ul>
			<br />
			<Question
				question="Which one of the following is a megadiverse country?"
				slideIndex={0}
				correctOption={4}
				questionId={0}
			>
				<div slot="option1" class="flex gap-1">
					<b>1. </b>
					<p>Brazil</p>
				</div>
				<div slot="option2" class="flex gap-1">
					<b>2. </b>
					<p>Singapore</p>
				</div>
				<div slot="option3" class="flex gap-1">
					<b>3. </b>
					<p>India</p>
				</div>
				<div slot="option4" class="flex gap-1">
					<b>4. </b>
					<p>Both 1 and 3</p>
				</div>
			</Question>
		</Card>
		<Card title="Flora">
			<p>
				Let's start with the <b>flora</b>!
				<br /><br />
				India's plant population represents around <b>11.8%</b> of the world's flora, including
				<b>17,500</b>
				flowering plants of which <b>4,950</b> species are endemic to the country.
				<br />
				It's estimated that <b>32%</b> of Indian plants are endemic to the country.
				<br /><br />
				Some common plants found in India are
				<HoverText width="200px" text="Tulsi/Holy Basil"
					><img src="/tulsi.jpg" alt="Tulsi" /></HoverText
				>,
				<HoverText width="200px" text="Aloe Vera"
					><img src="/aloevera.jpg" alt="Aloe Vera" /></HoverText
				>,
				<HoverText width="200px" text="Hibiscus"
					><img src="/hibiscus.jpg" alt="Hibiscus" /></HoverText
				>,
				<HoverText width="200px" text="Areca Palm"
					><img src="/arecapalm.jpg" alt="Areca Palm" /></HoverText
				>,
				<HoverText width="200px" text="Money Plant"
					><img src="/moneyplant.jpg" alt="Money Plant" /></HoverText
				>,
				<HoverText width="200px" text="Rose"><img src="/rose.jpg" alt="Rose" /></HoverText> and <HoverText
					width="200px"
					text="Bougainvillea"><img src="/bougainvillea.jpg" alt="Bougainvillea" /></HoverText
				>.
				<br /><br />
				Some exotic flowers that grow only in India include
				<HoverText width="200px" text="Ganges Primrose"
					><img src="/gangesprimrose.jpg" alt="Ganges Primrose" /></HoverText
				>,
				<HoverText width="200px" text="Woodrow’s Crinum Lily"
					><img src="/wcl.jpg" alt="Woodrow’s Crinum Lily" /></HoverText
				>,
				<HoverText width="200px" text="Law’s Ceropegia"
					><img src="/lc.jpg" alt="Law’s Ceropegia" /></HoverText
				> and
				<HoverText width="200px" text="Shirui Lily"
					><img src="/sl.jpg" alt="Shirui Lily" /></HoverText
				>.
				<br /><br />
				Next, let's learn about <b>Forests</b>.
			</p>
		</Card>
		<Card title="Forests">
			<p>
				The major types of forests found in India are:
				<span class="invisible md:visible">(Tap to learn more about the forest)</span>
				<br /><br />
			</p>
			<svelte:component this={Carousel}>
				<div
					class="flex flex-col w-full items-center hover:cursor-pointer"
					on:click={() => (forestClicked = 1)}
				>
					<img
						src="/tropicalevergreen.jpg"
						alt="Tropical Evergreen Forests"
						class="h-175 md:h-300"
					/>
					<p class="font-bold text-xl text-center">Tropical Evergreen Forests</p>
					{#if forestClicked === 1}
						<div
							class="z-1 absolute top-0 bg-red-600 rounded-md min-w-full p-3 break-words"
							in:scale
							out:scale={{ duration: $openIndex === 2 ? 400 : 0 }}
						>
							<div class="flex justify-end">
								<div
									style="width: 20px; height: 20px;"
									on:click|stopPropagation={() => (forestClicked = 0)}
								>
									<MdClose />
								</div>
							</div>
							<p>
								Tropical evergreen forests are dense, multi-layered, and harbour many types of
								plants and animals. These forests are found in the areas receiving heavy rainfall
								(more than 200 cm annual rainfall). They are very dense. Even the sunlight does not
								reach the ground. Numerous species of trees are found in these forests. In some
								regions, some types of trees shed their leaves at different times of the year.
								Therefore, these forests always appear green and are known as evergreen forests.
							</p>
						</div>
					{/if}
				</div>
				<div
					class="flex flex-col w-full items-center hover:cursor-pointer"
					on:click={() => (forestClicked = 2)}
				>
					<img
						src="/tropicaldeciduous.jpg"
						alt="Tropical Deciduous Forests"
						class="h-175 md:h-300"
					/>
					<p class="font-bold text-xl text-center">Tropical Decidouous Forests</p>
					{#if forestClicked === 2}
						<div
							class="z-1 absolute top-0 bg-red-600 rounded-md min-w-full p-3 break-words"
							in:scale
							out:scale={{ duration: $openIndex === 2 ? 400 : 0 }}
						>
							<div class="flex justify-end">
								<div
									style="width: 20px; height: 20px;"
									on:click|stopPropagation={() => (forestClicked = 0)}
								>
									<MdClose />
								</div>
							</div>
							<p>
								Tropical deciduous forests occur in regions with heavy rainfall for part of the year
								followed by a marked dry season. These forest formations are dense and lush during
								the wet summers, but become a dry landscape during the dry winters when most trees
								shed their leaves. Shedding their leaves allows trees to conserve water during dry
								periods. Bare trees open up the canopy layer, enabling sunlight to reach ground
								level and facilitate the growth of thick underbrush. Trees use underground water
								during the dry seasons. These dramatic changes in water availability have a great
								impact on the plants and animals living in this ecosystem.
							</p>
						</div>
					{/if}
				</div>
				<div
					class="flex flex-col w-full items-center hover:cursor-pointer"
					on:click={() => (forestClicked = 3)}
				>
					<img
						src="/thornforests.jpg"
						alt="Tropical Thorn Forests and Scrubs"
						class="h-175 md:h-300"
					/>
					<p class="font-bold text-xl text-center">Tropical Thorn Forests and Scrubs</p>
					{#if forestClicked === 3}
						<div
							class="z-1 absolute top-0 bg-red-600 rounded-md min-w-full p-3 break-words"
							in:scale
							out:scale={{ duration: $openIndex === 2 ? 400 : 0 }}
						>
							<div class="flex justify-end">
								<div
									style="width: 20px; height: 20px;"
									on:click|stopPropagation={() => (forestClicked = 0)}
								>
									<MdClose />
								</div>
							</div>
							<p>
								A thorn forest is a dense, scrubland with vegetation characteristic of dry
								subtropical and warm temperate areas with a seasonal rainfall averaging 250 to 500
								mm (9.8 to 19.7 in).
							</p>
						</div>
					{/if}
				</div>
				<div
					class="flex flex-col w-full items-center hover:cursor-pointer"
					on:click={() => (forestClicked = 4)}
				>
					<img src="/montane.jpg" alt="Montane Forests" class="h-175 md:h-300" />
					<p class="font-bold text-xl text-center">Montane Forests</p>
					{#if forestClicked === 4}
						<div
							class="z-1 absolute top-0 bg-red-600 rounded-md min-w-full p-3 break-words"
							in:scale
							out:scale={{ duration: $openIndex === 2 ? 400 : 0 }}
						>
							<div class="flex justify-end">
								<div
									style="width: 20px; height: 20px;"
									on:click|stopPropagation={() => (forestClicked = 0)}
								>
									<MdClose />
								</div>
							</div>
							<p>
								Montane forests are the forests that grow in mountainous areas. They consist of wet
								temperate forests between the altitudes of 1000 and 2000 metres. The trees in these
								forests typically have broad leaves. These include chestnut and oaks. Between the
								altitudes of 1500 and 3000 metres, the temperate forests consist of coniferous trees
								like pine, deodar, silver fir, spruce and cedar. Pine forests are found in the steep
								dry slopes of Shivalik Hills, Western and Central Himalayas. At altitides of more
								than 3600 metres, Alpine vegetation in the form of junipers and birches are found.
								In India, these forests are found on the southern slopes of the Himalayas. Alpine
								grasslands are used by nomadic tribes for grazing.
							</p>
						</div>
					{/if}
				</div>
				<div
					class="flex flex-col w-full items-center hover:cursor-pointer"
					on:click={() => (forestClicked = 5)}
				>
					<img src="/mangrove.jpg" alt="Mangrove Forests" class="h-175 md:h-300" />
					<p class="font-bold text-xl text-center">Mangrove Forests</p>
					{#if forestClicked === 5}
						<div
							class="z-1 absolute top-0 bg-red-600 rounded-md min-w-full p-3 break-words"
							in:scale
							out:scale={{ duration: $openIndex === 2 ? 400 : 0 }}
						>
							<div class="flex justify-end">
								<div
									style="width: 20px; height: 20px;"
									on:click|stopPropagation={() => (forestClicked = 0)}
								>
									<MdClose />
								</div>
							</div>
							<p>
								Mangrove forests or mangrove swamps are coastal wetlands found in tropical and
								subtropical regions. They are characterized by halophytic (salt loving) trees,
								shrubs and other plants growing in brackish to saline tidal waters. These wetlands
								are often found in estuaries, where fresh water meets salt water and are infamous
								for their impenetrable maze of woody vegetation.
							</p>
						</div>
					{/if}
				</div>
			</svelte:component>
		</Card>
		<Card title="Quiz Time!">
			<Question
				slideIndex={3}
				questionId={1}
				question="Which forest is not found in India?"
				correctOption={2}
			>
				<div slot="option1" class="flex gap-1">
					<b>1. </b>
					<p>Tropical Thorn Forests</p>
				</div>
				<div slot="option2" class="flex gap-1">
					<b>2. </b>
					<p>Temperate Evergreen Forests</p>
				</div>
				<div slot="option3" class="flex gap-1">
					<b>3. </b>
					<p>Montane Forests</p>
				</div>
				<div slot="option4" class="flex gap-1">
					<b>4. </b>
					<p>Tropical Decidouous Forest</p>
				</div>
			</Question>
			<Question
				slideIndex={3}
				questionId={2}
				question="How much percentage of world's flora does India have?"
				correctOption={1}
			>
				<div slot="option1" class="flex gap-1">
					<b>1. </b>
					<p>11.8%</p>
				</div>
				<div slot="option2" class="flex gap-1">
					<b>2. </b>
					<p>12%</p>
				</div>
				<div slot="option3" class="flex gap-1">
					<b>3. </b>
					<p>12.3%</p>
				</div>
				<div slot="option4" class="flex gap-1">
					<b>4. </b>
					<p>11.5%</p>
				</div>
			</Question>
			<Question slideIndex={3} questionId={3} question="Recognize this flower -" correctOption={3}>
				<img src="/wcl.jpg" alt="Question" slot="image" style="height: 200px;" />
				<div slot="option1" class="flex gap-1">
					<b>1. </b>
					<p>Ganges Primrose</p>
				</div>
				<div slot="option2" class="flex gap-1">
					<b>2. </b>
					<p>Areca Palm</p>
				</div>
				<div slot="option3" class="flex gap-1">
					<b>3. </b>
					<p>Woodrow’s Crinum Lily</p>
				</div>
				<div slot="option4" class="flex gap-1">
					<b>4. </b>
					<p>Law's Ceropegia</p>
				</div>
			</Question>
		</Card>
		<Card title="Fauna">
			As with plants, India also has a huge variety of <b>animals</b>.
			<br /><br />
			Here's a table showcasing the distribution of wildlife in India:
			<br /><br />
			<table class="text-center table-auto border-collapse">
				<tr>
					<th />
					<th>Number of Species in india</th>
					<th>Percentage to World</th>
				</tr>
				<tr>
					<td>Arthropoda</td>
					<td>68,389</td>
					<td>7%</td>
				</tr>
				<tr>
					<td>Insects</td>
					<td>53,400</td>
					<td>7%</td>
				</tr>
				<tr>
					<td>Amphibians</td>
					<td>350</td>
					<td>5%</td>
				</tr>
				<tr>
					<td>Reptiles</td>
					<td>456</td>
					<td>8%</td>
				</tr>
				<tr>
					<td>Birds</td>
					<td>1,232</td>
					<td>14%</td>
				</tr>
				<tr>
					<td>Mammals</td>
					<td>390</td>
					<td>8%</td>
				</tr>
			</table>
		</Card>
		<Card title="Animals found in India">
			<p>
				India is home to various animals. Some of the most well known ones are:
				<br /><br />
				The majestic <HoverText text="Indian Elephant" width="275px">
					<img src="/elephant.jpg" alt="Indian Elephant" />
				</HoverText>, the Royal <HoverText text="Bengal Tiger" width="275px"
					><img src="bt.jpg" alt="Bengal Tiger" /></HoverText
				>, the Great <HoverText text="Indian Rhinoceros" width="275px"
					><img src="rhino.jpg" alt="Indian Rhinoceros" /></HoverText
				>, the <HoverText text="Asiatic Lion" width="275px">
					<img src="/lion.jpg" alt="Asiatic Lion" />
				</HoverText> found today only in India and the <HoverText text="Indian" width="275px">
					<img src="/leo.jpg" alt="Indian Leopard" />
				</HoverText>, <HoverText text="Snow" width="275px">
					<img src="/leo3.jpg" alt="Snow Leopard" />
				</HoverText> and <HoverText text="Clouded" width="275px">
					<img src="/leo2.jpg" alt="Clouded Leopard" />
				</HoverText> Leopards.
				<br /><br />
				Others include the Himalayan <HoverText text=" Black" width="275px">
					<img src="/blackbear.jpg" alt="Himalayan Black Bear" />
				</HoverText> and <HoverText text=" Brown" width="275px">
					<img src="/brownbear.jpg" alt="Himalayan Brown Bear" />
				</HoverText> Bears, the <HoverText text="Chausinga Antelope" width="275px">
					<img src="/chau.jpg" alt="Chausinga Antelope" />
				</HoverText>, the <HoverText text="Sambar Deer" width="275px">
					<img src="/sambar.jpg" alt="Sambar Deer" />
				</HoverText>, the <HoverText text="Himalayan Tahr" width="275px">
					<img src="/tahr.jpg" alt="Himalayan Tahr" />
				</HoverText> and various other species.
				<br /><br />
				<b>Reptiles</b> include <HoverText text="King Cobra" width="275px">
					<img src="/kingcobra.jpg" alt="King Cobra" />
				</HoverText>, the <HoverText text="Indian Cobra" width="275px">
					<img src="/indiancobra.jpg" alt="Indian Cobra" />
				</HoverText>, the <HoverText text="Reticulated Python" width="275px">
					<img src="/rpython.jpg" alt="Reticulated Python" />
				</HoverText> - the world's longest snake, the <HoverText text="Gharial" width="275px">
					<img src="gharial.jpg" alt="Gharial" />
				</HoverText>, the <HoverText text="Saltwater Crocodile" width="275px">
					<img src="scroc.jpg" alt="Saltwater Crocodile" />
				</HoverText>, the <HoverText text="Indian Golden Gecko" width="275px">
					<img src="/igg.jpg" alt="Indian Golden Gecko" />
				</HoverText> and more.
				<br /><br />
				Some <b>bird</b> species include the <HoverText text="Indian Peacock" width="275px">
					<img src="/peacock.jpg" alt="Indian Peacock" />
				</HoverText>, the <HoverText text="Great Indian Hornbill" width="275px">
					<img src="/gih.jpg" alt="Great Indian Hornbill" />
				</HoverText>, the <HoverText text="Painted Stork" width="275px">
					<img src="/stork.jpg" alt="Painted Stork" /></HoverText
				>, the <HoverText text="Greater" width="275px">
					<img src="/greater.jpg" alt="Greater Flamingo" />
				</HoverText> and <HoverText text="Lesser" width="275px">
					<img src="/lesser.jpg" alt="Lesser Flamingo" />
				</HoverText> Flamingo.
				<br /><br />
				As a country with so much diversity India is ranked as the world's
				<b>8<sup>th</sup> most biodiverse nation</b>.
			</p>
		</Card>
		<Card title="Quiz 2!">
			<Question slideIndex={6} correctOption={3} questionId={4} question="Identify this bird -">
				<img src="/greater.jpg" alt="Question" slot="image" style="height: 200px;" />
				<div slot="option1" class="flex gap-1">
					<b>1. </b>
					<p>The Lesser Flamingo</p>
				</div>
				<div slot="option2" class="flex gap-1">
					<b>2. </b>
					<p>The Painted Stork</p>
				</div>
				<div slot="option3" class="flex gap-1">
					<b>3. </b>
					<p>The Greater Flamingo</p>
				</div>
				<div slot="option4" class="flex gap-1">
					<b>4. </b>
					<p>The Great Indian Hornbill</p>
				</div>
			</Question>
			<Question
				slideIndex={6}
				correctOption={2}
				questionId={5}
				question="How much percentage of the world's reptiles does India has?"
			>
				<div slot="option1" class="flex gap-1">
					<b>1. </b>
					<p>7%</p>
				</div>
				<div slot="option2" class="flex gap-1">
					<b>2. </b>
					<p>8%</p>
				</div>
				<div slot="option3" class="flex gap-1">
					<b>3. </b>
					<p>11%</p>
				</div>
				<div slot="option4" class="flex gap-1">
					<b>4. </b>
					<p>10%</p>
				</div>
			</Question>
			<Question
				slideIndex={6}
				correctOption={4}
				questionId={6}
				question="India ranks as the world's _____ most biodiverse nation."
			>
				<div slot="option1" class="flex gap-1">
					<b>1. </b>
					<p>7<sup>th</sup></p>
				</div>
				<div slot="option2" class="flex gap-1">
					<b>2. </b>
					<p>5<sup>th</sup></p>
				</div>
				<div slot="option3" class="flex gap-1">
					<b>3. </b>
					<p>1<sup>st</sup></p>
				</div>
				<div slot="option4" class="flex gap-1">
					<b>4. </b>
					<p>8<sup>th</sup></p>
				</div>
			</Question>
			<Question slideIndex={6} correctOption={2} questionId={7} question="Which animal is this?">
				<img src="/sambar.jpg" alt="Question" slot="image" style="height: 200px;" />
				<div slot="option1" class="flex gap-1">
					<b>1. </b>
					<p>The Gharial</p>
				</div>
				<div slot="option2" class="flex gap-1">
					<b>2. </b>
					<p>The Sambar Deer</p>
				</div>
				<div slot="option3" class="flex gap-1">
					<b>3. </b>
					<p>The Himalayn Tahr</p>
				</div>
				<div slot="option4" class="flex gap-1">
					<b>4. </b>
					<p>The Indian Golden Gecko</p>
				</div>
			</Question>
		</Card>
		<Card title="Conservation Efforts">
			<p>
				Conservation efforts have always remained an integral part of the biodiversity system of
				India. From the passing of <HoverText text="Wildlife Protection Act of 1972">
					<p>
						This Act provides for the protection of wild animals, birds and plants. It extends to
						the whole of India
					</p>
				</HoverText> to the setting up of various protection habitats, the government has taken various
				efforts to conserve India's biodiversity.
				<br /><br />
			</p>
			<ul class="list-disc ml-3">
				<li>
					Biospehere Reserves: These are protected areas housing natural vegetation and wildlife. 18
					biosphere reserves are set up in India. <b
						><HoverText text="12" width="300px">
							<p>
								Nilgiri, Gulf of Mannar, Sunderbans, Nanda Devi, Pachmarhi, Nokrek, Simlipal,
								Achanakmar-Amarkantak, Great Nicobar, Agasthyamala, Kanchenjunga and Panna Biosphere
								Reserves
							</p>
						</HoverText></b
					> of these are included in the UNESCO World Network of Biosphere Reserves.
				</li>
				<li>
					India houses <b
						>103 <HoverText text="National Parks" width="300px">
							A national park is a natural park in use for conservation purposes, created and
							protected by national governments. A common idea behind national parks is the
							conservation of 'wild nature' for posterity and as a symbol of national pride.
						</HoverText></b
					>,
					<b
						>535 <HoverText text="Wildlife Sanctuaries" width="300px">
							A Wildlife Sanctuary is a protected area of importance for flora, fauna, or features
							of geological or other interest, which is reserved and managed for conservation and to
							provide opportunities for study or research.
						</HoverText></b
					>
					and more than
					<b
						>164 <HoverText text="Zoological Parks" width="300px">
							A zoological park (zoo) is a facility in which animals are housed within enclosures,
							cared for, displayed to the public, and in some cases bred for conservation purposes.
						</HoverText></b
					>.
				</li>
				<li>
					Various projects have been initiated such as <b
						><HoverText text="Project Tiger" width="300px">
							Project Tiger is a tiger conservation programme launched in April 1973 by the
							Government of India during Prime Minister Indira Gandhi's tenure.
						</HoverText></b
					>,
					<b
						><HoverText text="Project Rhino" width="300px">
							Launched in 2005, Project Rhino (Indian Rhino Vision 2020) is an ambitious effort to
							attain a wild population of at least 3,000 greater one-horned rhinos spread over seven
							protected areas in the Indian state of Assam by the year 2020.
						</HoverText></b
					>
					and
					<b
						><HoverText text="Project Great Indian Bastard" width="300px">
							Project Great Indian Bustard was launched by the Rajasthan state government in June
							2013 and aims to improve the population of the mostly neglected, Great Indian Bastard.
						</HoverText></b
					>.
				</li>
			</ul>
			<p>
				<br /><br />
				These are various initiatives through which the government is taking requisite actions to conserve
				the <b>vivid biodiversity</b> of India.
			</p>
		</Card>
		<Card title="Quiz!">
			<Question
				slideIndex={8}
				questionId={8}
				correctOption={2}
				question="Which state government launched Project Great Indian Bastard?"
			>
				<div slot="option1" class="flex gap-1">
					<b>1. </b>
					<p>Uttar Pradesh</p>
				</div>
				<div slot="option2" class="flex gap-1">
					<b>2. </b>
					<p>Rajasthan</p>
				</div>
				<div slot="option3" class="flex gap-1">
					<b>3. </b>
					<p>Chhattisgarh</p>
				</div>
				<div slot="option4" class="flex gap-1">
					<b>4. </b>
					<p>Mizoram</p>
				</div>
			</Question>
			<Question
				slideIndex={8}
				questionId={9}
				correctOption={1}
				question="How many national parks does India have?"
			>
				<div slot="option1" class="flex gap-1">
					<b>1. </b>
					<p>103</p>
				</div>
				<div slot="option2" class="flex gap-1">
					<b>2. </b>
					<p>134</p>
				</div>
				<div slot="option3" class="flex gap-1">
					<b>3. </b>
					<p>101</p>
				</div>
				<div slot="option4" class="flex gap-1">
					<b>4. </b>
					<p>122</p>
				</div>
			</Question>
			<Question
				slideIndex={8}
				questionId={10}
				correctOption={4}
				question="How many Indian Biosphere Reserves are included in the UNESCO World Network of Biosphere Reserves?"
			>
				<div slot="option1" class="flex gap-1">
					<b>1. </b>
					<p>13</p>
				</div>
				<div slot="option2" class="flex gap-1">
					<b>2. </b>
					<p>15</p>
				</div>
				<div slot="option3" class="flex gap-1">
					<b>3. </b>
					<p>10</p>
				</div>
				<div slot="option4" class="flex gap-1">
					<b>4. </b>
					<p>12</p>
				</div>
			</Question>
		</Card>
		<Card title="Thank You!">
			<div class="md:mt-10 flex flex-col justify-center items-center w-full">
				<p class="text-center text-xl">
					I hope you are as enthralled by the biodiversity of India as I am! India's variety of
					flora and fauna is a play of wondrous colours and characteristics and has truly
					contributed to making India one of the most beautiful countries in the world.
					<br /><br />
					Made by Sumanyu Aggarwal
					<br /><br />
				</p>
				<a href="https://github.com/SuPythony/Biodiverse-India"
					><div class="w-8 h-8"><FaGithub /></div></a
				>
			</div>
		</Card>
	</Cards>
</div>

<style lang="scss">
	table,
	th,
	td {
		@apply border border-black p-2;
	}
</style>
