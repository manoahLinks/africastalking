import React from 'react'
import {TfiPencilAlt} from 'react-icons/tfi'

function Laboratory() {
  return (
    <div className='flex flex-col bg-white p-5 gap-y-2'>
         <span className='flex items-center gap-x-2'>
            <small>Laboratory:</small>
            <TfiPencilAlt/>
        </span>
        
        <div className='flex flex-col h-90'>
            <span>
                <small>Test Type:</small>
            </span>

            <div className='overflow-y-auto flex flex-col gap-y-2 h-90'>
                <div className='flex flex-col'>
                    <small>Test Result</small>
                    <ul>
                        <small>Hemogloblin: 14:12 g/cli</small>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum aliquam explicabo exercitationem molestias facilis ab perferendis eius dolor eum iste dicta deleniti quis magnam debitis expedita pariatur nisi aliquid repudiandae, dolores, recusandae numquam nulla. Aliquam iste doloremque accusantium dolorum. Deserunt accusamus iusto rem voluptatibus magni at voluptate, pariatur aut, distinctio minima ipsam modi fugit labore asperiores dolorem veniam enim commodi saepe quam iste dolores iure sint perferendis. Itaque assumenda cum atque praesentium molestiae quo sed labore molestias, officia tempora animi voluptatibus? Voluptatem exercitationem officiis et placeat rem minima esse eveniet perferendis debitis. Illo tempore molestiae dolore, natus at, ipsam voluptate consequuntur excepturi recusandae dolor repudiandae consequatur necessitatibus provident temporibus adipisci obcaecati nam ullam, porro debitis vero expedita corrupti accusantium ad! Enim sed architecto vitae nulla, soluta facilis delectus similique in illo placeat doloremque earum inventore provident officiis molestiae iure quibusdam neque corrupti voluptas! Architecto ducimus accusantium quidem perferendis nisi deleniti totam facere officia exercitationem assumenda nihil modi fuga est corrupti, quod nemo quam. Quis tempore incidunt facilis aliquid veniam eos. Labore odio commodi, nisi voluptates fugit rerum explicabo aliquid eveniet quod rem ullam cum culpa vel corrupti perspiciatis, illo quae consequuntur hic dolores officia! Cupiditate maxime quos sed ipsam!</small>

                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Laboratory