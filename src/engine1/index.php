<?php
    define('TEMPLATES_DIR', 'templates/');
    define('LAYOUTS_DIR', 'layouts/');

    $page = 'index';
    if (isset($_GET['page'])) {
        $page = $_GET['page'];
    }
    $params = [];

    switch ($page) {
        case 'index':
            $params['title'] = 'Главная';
            $params['test'] = 'ПРОВЕРКА';
            break;

        case 'catalog':
            $params['title'] = 'Каталог';
            $category = $_GET['category'] ?? 'fruits';
            $params['catalog'] = getCatalog($category);
            $params['category'] = $category;
            break;

        case 'about':
            $params['title'] = 'О нас';
            $params['phone'] = '+7 922 55-45-35';
            break;

        case 'apicatalog':
            echo json_encode(getCatalog(), JSON_UNESCAPED_UNICODE);
            die();

        default:
            echo "404";
            die();
    }

    function getCatalog($category = 'fruits') {
    $items = [
        'fruits' => [
            ['name' => 'Яблоко', 'price' => 55, 'image' => 'apple.png'],
            ['name' => 'Банан', 'price' => 23, 'image' => 'banana.png'],
            ['name' => 'Апельсин', 'price' => 47, 'image' => 'orange.png'],
        ],
        'vegetables' => [
            ['name' => 'Морковь', 'price' => 61, 'image' => 'carrot.png'],
            ['name' => 'Огурец', 'price' => 41, 'image' => 'cucumber.png'],
        ]
    ];

    return $items[$category] ?? [];
}

    function getMenu() {
        return [
            ['title' => 'Главная', 'link' => '/engine1/index.php'],
            [
                'title' => 'Каталог',
                'link' => '/engine1/index.php?page=catalog',
                'children' => [
                    ['title' => 'Фрукты', 'link' => '/engine1/index.php?page=catalog&category=fruits'],
                    ['title' => 'Овощи', 'link' => '/engine1/index.php?page=catalog&category=vegetables'],
                ]
            ],
            ['title' => 'О нас', 'link' => '/engine1/index.php?page=about'],
        ];
    }

    function render($page, $params = []) {
        return renderTemplate(LAYOUTS_DIR . 'main', [
            'title' => $params['title'],
            'menu' => renderTemplate('menu', ['menus' => getMenu()]),
            'content' => renderTemplate($page, $params)
        ]);
    }

    function renderTemplate($page, $params = []) {
        extract($params);
        ob_start();
        include TEMPLATES_DIR . $page . ".php";
        return ob_get_clean();
    }

    echo render($page, $params);
?>