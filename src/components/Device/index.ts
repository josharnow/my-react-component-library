// NOTE - Lazy loading is the responsibility of the application, not the here in the library (https://github.com/ng-packagr/ng-packagr/issues/1960#issuecomment-827543254)
// import dynamic from 'next/dynamic';

// // NOTE - This dynamic loading is causing this issue with rollup: Error: Invalid value for option "output.file" - when building multiple chunks, the "output.dir" option must be used, not "output.file". To inline dynamic imports, set the "inlineDynamicImports" option.
// const Device = dynamic(() => import('./Device'), { ssr: false })
// // const Device = dynamic(() => import('./Device'), { ssr: false })

// export default Device

export { default } from './Device';