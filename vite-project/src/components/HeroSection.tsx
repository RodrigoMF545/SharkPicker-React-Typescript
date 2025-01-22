import image from '../assets/rb_27083.png';

function HeroSection (){
    return (
        <div className="pt-16 mb-16 pb-8 flex flex-col  justify-center items-center text-white">
            <div className='w-24 h-24 mb-6'>
                <img 
                src="https://img.freepik.com/free-psd/earth-planet-transparent-background_84443-27083.jpg?t=st=1737062214~exp=1737065814~hmac=fdb13a395d788813e3700ad242193d65d63724a92b9ed18a2370ed422f1bed6a&w=740" 
                alt="" 
                className='w-full  h-full rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500'/>
            </div>
            <div className="text-center items-center justify-center">
                <h1 className="text-8xl tracking-widest font-bold mb-5">SHARKPICKER</h1>
                <p className="text-gray-400 px-4 text-3xl ">Criar sua seleção pessoal de tubarões que já viu ou gostaria de ver nos mares de Cabo Verde</p>
            </div>
        </div>
    )
}

export default HeroSection;