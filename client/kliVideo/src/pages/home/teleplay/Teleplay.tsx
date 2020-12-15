import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {VideoPlayer} from '../../../components';
import {changeSubtitle} from '../../../store/actions';
export const Teleplay = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        changeSubtitle(dispatch, '电视剧');
    }, []);
    return (
        <div className='content'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto hic sequi unde et quos aspernatur quaerat
            nisi illum explicabo, molestias asperiores, harum voluptatum ut in pariatur doloribus? Magni, soluta? Error
            impedit asperiores voluptatibus dignissimos fugit obcaecati, quis nulla perferendis voluptas corrupti
            explicabo repellat unde, deleniti sunt a labore quaerat dolor numquam veritatis praesentium pariatur maxime
            odit. Dignissimos tenetur nesciunt velit excepturi mollitia nostrum animi autem, officia delectus quod
            accusantium voluptatibus totam. Quasi ratione, impedit illum cumque quas nemo atque soluta labore, saepe
            quam neque cupiditate eum magni nobis, sequi ducimus similique illo mollitia cum odit? Quasi nulla quaerat,
            perferendis, a aliquid obcaecati aut neque, quam esse debitis inventore veniam nam eius beatae ullam ea.
            Iure hic itaque provident accusamus laudantium nobis quisquam quae, a dolor incidunt sit culpa modi
            exercitationem consectetur rem illum dolore deserunt, optio eos suscipit quam? Nobis qui laudantium, nihil
            repellendus ducimus veritatis recusandae in? Minima totam quis natus quae ratione. Fuga est optio corporis
            nobis atque consequatur hic provident excepturi veniam odit placeat nesciunt ipsa, ratione incidunt dolore
            obcaecati quaerat nihil esse officia quia voluptates magni nulla vitae itaque. Aperiam adipisci odit quia
            nihil omnis deleniti at, quae fugiat nostrum sapiente architecto eius optio dignissimos a vero! Distinctio
            dolores mollitia adipisci. Quam veritatis officia vero facere, cupiditate quas deserunt cum, eligendi beatae
            facilis error sint magnam debitis ex numquam sequi amet nostrum, esse omnis quod. Eaque harum dolores
            perspiciatis, ipsa accusantium tenetur impedit molestias illum consequuntur velit, perferendis distinctio
            corrupti eum blanditiis aliquid vero inventore deserunt sequi. Voluptates ullam rem, unde dolorum laborum
            sapiente impedit vitae, ratione natus suscipit reprehenderit, inventore veritatis asperiores non! Ea,
            beatae. Modi temporibus, maiores sequi molestiae dolore excepturi aperiam, repellendus non commodi tempore
            nulla architecto sit ab! Inventore dolore vel ducimus aut. Sunt accusamus quaerat rem dolorum praesentium,
            modi doloremque, reiciendis voluptatum harum exercitationem atque molestiae nostrum ex temporibus iure!
            Maiores adipisci dolorum unde! Inventore deserunt repellendus nesciunt magni minus cumque exercitationem
            distinctio quia fugiat. In cumque possimus nihil saepe placeat assumenda magni, perferendis, quae, impedit
            voluptate aliquid dolorum dignissimos aut natus atque aperiam! Reprehenderit eius iste consectetur dicta
            earum similique expedita, quasi sequi dignissimos quis nostrum voluptatibus, obcaecati perspiciatis
            necessitatibus, suscipit eaque ipsa dolor ducimus nisi eligendi possimus error explicabo! Aliquam aspernatur
            cumque expedita voluptatem ipsum possimus necessitatibus repudiandae doloremque, accusantium, esse vero non
            dicta! Totam, numquam ut exercitationem, atque sapiente animi minus perspiciatis quasi temporibus
            perferendis optio, pariatur earum ullam. Debitis mollitia reiciendis eveniet consectetur magni, voluptatem
            modi porro. In dignissimos error ratione odio odit commodi, perspiciatis explicabo. Obcaecati, tenetur,
            dolorum quaerat repudiandae praesentium explicabo sequi recusandae minus eos assumenda, dolorem possimus
            officiis nam odit natus commodi tempora a voluptatum totam sit? Autem corporis, accusantium et nesciunt
            tempora explicabo. Debitis vel repudiandae fugiat nam, officiis error earum est esse ipsam neque, quod in
            molestias illo amet hic nesciunt quos quibusdam, sed dolor placeat? Placeat eaque ad id iure deleniti maxime
            veritatis? Labore animi magnam soluta vel at iste provident, delectus corporis expedita, vero excepturi
            placeat quos, odio libero eos.
        </div>
    );
};
