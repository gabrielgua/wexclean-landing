<script setup lang="ts">
import ProductLineBanner from '@/components/ProductLineBanner.vue';
import Section from '@/components/Section.vue';
import { Armchair, Bone, BrushCleaning, CarFront, Dog, Droplets, PawPrint, Shell, Sofa, Wind } from '@lucide/vue';

const lines = [
  {
    icon: Droplets,
    title: 'Linha Extratoras',
    tagline: 'Limpeza profissional',
    description: 'A linha WEX Clean Limpa e Extrai foi desenvolvida para proporcionar uma limpeza eficiente e profunda em extratoras, removendo sujeiras, manchas e resíduos acumulados em diferentes tipos de tecidos e superfícies. Sua fórmula concentrada oferece alto rendimento e auxilia na recuperação do aspecto original dos materiais, deixando o ambiente mais limpo e renovado.',
    bgClass: 'bg-navy',
    textClass: 'text-cream',
    imgUrl: 'images/limpa-extrai-1l.png',
    indications: [
      { label: 'Carpetes e tapetes', icon: Shell },
      { label: 'Estofados e sofás', icon: Sofa },
      { label: 'Bancos automotivos', icon: CarFront },
      { label: 'Uso doméstico e profissional', icon: BrushCleaning },
    ],
    sizes: ['1 Litro', '5 Litros'],
    amazonUrl: 'https://www.amazon.com.br/s?k=wex+clean+extratora',
    details: [
      {
        title: 'APLICAÇÃO E MODO DE USO:',
        details: '1. Aspirar o carpete ou estofado antes da aplicação. 2. Diluir o produto até 1 parte do produto para 30 partes de água limpa, conforme o nível de sujidade. 3. Aplicar a solução com a extratora, pulverizador ou escova, distribuindo uniformemente. 4. Deixar agir por alguns minutos; esfregar se necessário. 5. Enxaguar e aspirar o excesso de água e espuma. 6. Deixar secar naturalmente em ambiente ventilado.'
      },
      {
        title: 'ATENÇÃO:',
        details: 'Cuidado! Perigoso a ingestão. Em caso de ingestão não provoque vômito e consulte imediatamente um médico ou um CENTRO DE INTOXICAÇÃO, levando o rótulo do produto. Telefone de emergência: CEATOX: 0800 014 8110. Pode causar irritação em contato com a pele e os olhos. Evite o contato com a pele e os olhos. Depois de usar o produto lave as mãos. EM CASO DE CONTATO COM A PELE: Lave com água em abundância. EM CASO DE CONTATO COM OS OLHOS: enxague cuidadosamente com água por vários minutos. No caso de uso de lentes de contato, remova-as se for fácil, continue enxaguando. Mantenha o produto em sua embalagem original. Não misture com outros produtos.'
      },
      {
        title: 'COMPOSIÇÃO:',
        details: 'ÁGUA, TRIPOLIFOSFATO DE SÓDIO, SURFACTANTE ANIÔNICO, SEQUESTRANTE, CONSERVANTE, CORANTE E FRAGRÂNCIA.'
      },
      {
        title: 'MANTENHA FORA DO ALCANCE DAS CRIANÇAS E ANIMAIS.',
      },
      {
        title: 'Validade de 24 meses.',
      },
    ]
  },
  {
    icon: PawPrint,
    title: 'Linha Pet',
    tagline: 'Feito para quem tem bichinho em casa',
    description: 'WEX Clean Pet Eliminador de Odores foi desenvolvido para ajudar a neutralizar odores desagradáveis causados por animais de estimação, proporcionando ambientes mais limpos e agradáveis. Sua fórmula é ideal para uso em diferentes superfícies, auxiliando na manutenção da higiene de locais frequentados pelos pets.',
    bgClass: 'bg-green',
    textClass: 'text-navy-deep',
    imgUrl: 'images/pet-1l.png',
    indications: [
      { label: 'Manchas de xixi e fezes', icon: Dog },
      { label: 'Odor em caixas de areia e casinhas', icon: Wind },
      { label: 'Estofados, carpetes e pisos', icon: Armchair },
      { label: 'Ambientes com cães e gatos', icon: Bone },
    ],
    sizes: ['500 Ml', '1 Litro'],
    amazonUrl: 'https://www.amazon.com.br/s?k=wex+clean+pet',
    details: [
      {
        title: 'Modo de uso:',
        details: 'Agite bem antes de usar. Aplique o produto diretamente sobre a superfície ou local com odor, mantendo uma distância adequada. Deixe agir por alguns minutos e aguarde a secagem natural. Para melhores resultados, utilize regularmente nos ambientes frequentados pelos pets. '
      },
      {
        title: 'Indicação / Aplicação:',
        details: 'Indicado para auxiliar na eliminação de odores desagradáveis causados por animais de estimação. Pode ser aplicado em tecidos, tapetes, estofados, caminhas, caixas de transporte e demais superfícies laváveis. Antes da aplicação, recomenda-se testar o produto em uma pequena área para verificar a compatibilidade com o material.'
      },
      {
        title: 'Validade de 24 meses.',
      },
    ]
  },
];
</script>

<template>
  <div>
    <Section bg-color="bg-cream" text-color="text-navy" badge-bg-color="bg-navy" badge-text-color="text-cream"
      description-text-color="text-navy/70" centered>
      <template #badge>Nossas linhas</template>
      <template #title>Conheça os produtos WEX CLEAN</template>
      <template #description>
        Indicações e tamanhos disponíveis já aparecem em cada linha — clique em "Saiba mais" pra mais detalhes.
      </template>
    </Section>

    <ProductLineBanner v-for="(line, i) in lines" :key="i" v-bind="line" :reverse="i % 2 !== 0" />
  </div>
</template>